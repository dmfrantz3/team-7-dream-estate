from fastapi import APIRouter, Depends
from models.fin_user import fin_user, fin_role, fin_user_has_role
from models.fin_application import fin_application_pledge, fin_user_application
from schemas.fin_application import PY_fin_user, PY_fin_role, PY_fin_user_application
from typing import List
import bcrypt
import secrets

from base import Session

router = APIRouter()

def get_db():
    db = Session()
    try: 
        yield db
    finally: 
        db.close()

@router.get("/user/{email}", tags=["User"], response_model=PY_fin_user)
async def get_user(email: str, session: Session=Depends(get_db)):
    user = session.query(fin_user).filter(fin_user.email == email).first()
    if (user):
        user.pledgeList = session.query(fin_application_pledge).filter(fin_application_pledge.userid==user.userid).all()
    return user

@router.post("/user/application", tags=["User, Application"], response_model=PY_fin_user_application)
async def get_application_by_user(user: PY_fin_user, session: Session=Depends(get_db)):
    application = session.query(fin_user_application).filter(fin_user_application.userid == user.userid).first()
    return application

@router.get("/user/{userid}/roles", tags=["User"], response_model=List[PY_fin_role])
async def get_roles(userid: int, session: Session=Depends(get_db)):
    roles = session.query(fin_role).join(fin_user_has_role).join(fin_user).filter(fin_role.roleid == fin_user_has_role.roleid, 
    fin_user.userid == userid, fin_user.userid == fin_user_has_role.userid).all()
    return roles

@router.post("/user/login", tags=["User"], response_model=PY_fin_user)
async def login_user(user: PY_fin_user, session: Session=Depends(get_db)):
    #check if user exists
    try_user = session.query(fin_user).filter(fin_user.email == user.email).first()
    if (not try_user):
        user.errorMessage = "Email is not registered to an existing account."
        new_user = user
    else:
        #user exists. verify password
        try_pass = bcrypt.checkpw(user.password.encode('utf8'), try_user.password.encode('utf8'))
        if(try_pass):
            new_user = try_user
            #password verified. Get Pledges
            #on successful login, generate & store a token
            new_token = secrets.token_hex()
            new_user.access_token = new_token
            session.commit()
            new_user.pledgeList = session.query(fin_application_pledge).filter(fin_application_pledge.userid==new_user.userid).all()
            #get Roles
            new_user.roles = session.query(fin_role).join(fin_user_has_role).join(fin_user).filter(fin_role.roleid == fin_user_has_role.roleid, 
            fin_user.userid == new_user.userid, fin_user.userid == fin_user_has_role.userid).all()
        else:
            user.errorMessage = "Incorrect Password."
            new_user = user
    return new_user

@router.post("/user/validate", tags=["User"], response_model=PY_fin_user)
async def luser_validate_token(user: PY_fin_user, session: Session=Depends(get_db)):
    #validate token
    try_user = session.query(fin_user).filter(fin_user.access_token == user.access_token).first()
    if (try_user):
        new_user = try_user
        new_user.pledgeList = session.query(fin_application_pledge).filter(fin_application_pledge.userid==new_user.userid).all()
        #get Roles
        new_user.roles = session.query(fin_role).join(fin_user_has_role).join(fin_user).filter(fin_role.roleid == fin_user_has_role.roleid, 
        fin_user.userid == new_user.userid, fin_user.userid == fin_user_has_role.userid).all()
    else:
        user.errorMessage = "Invalid Token!"
        new_user = user
    return new_user

@router.post("/user/logout", tags=["User"], response_model=PY_fin_user)
async def logout_user(user: PY_fin_user, session: Session=Depends(get_db)):
    #validate token
    try_user = session.query(fin_user).filter(fin_user.access_token == user.access_token).first()
    if (try_user):
        new_user = try_user
        new_user.access_token = ""
        session.commit()
    return new_user


@router.post("/user", tags=["User"], response_model=PY_fin_user)
async def create_user(user: PY_fin_user, session: Session=Depends(get_db)):
    #check if user exists
    try_user = session.query(fin_user).filter(fin_user.email == user.email).first()
    if (try_user):
        user.errorMessage = "Email is registered to an existing user."
        new_user = user
    else:
        new_user = fin_user(firstname=user.firstname, lastname=user.lastname, 
        email=user.email, password=bcrypt.hashpw(user.password.encode('utf8'), bcrypt.gensalt()))
        session.add(new_user)
        session.commit()
        for role in user.roles:
            new_user_has_role = fin_user_has_role(userid=new_user.userid, roleid=role.roleid)
            session.add(new_user_has_role)
            session.commit()
        new_user.roles = user.roles
    return new_user

    

