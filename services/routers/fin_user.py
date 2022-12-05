from fastapi import APIRouter, Depends
from models.fin_user import fin_user, fin_role, fin_user_has_role
from models.fin_application import fin_application_pledge
from schemas.fin_application import PY_fin_user, PY_fin_role
from typing import List
import bcrypt

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

@router.get("/user/{userid}/roles", tags=["User"], response_model=List[PY_fin_role])
async def get_roles(userid: int, session: Session=Depends(get_db)):
    roles = session.query(fin_role).join(fin_user_has_role).join(fin_user).filter(fin_role.roleid == fin_user_has_role.roleid, 
    fin_user.userid == userid, fin_user.userid == fin_user_has_role.userid).all()
    return roles

@router.post("/user", tags=["User"], response_model=PY_fin_user)
async def create_user(user: PY_fin_user, session: Session=Depends(get_db)):
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
    

