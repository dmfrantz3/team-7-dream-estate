from fastapi import APIRouter, Depends
from schemas.fin_application import PY_fin_user_application , PY_fin_application_pledge
from models.fin_application import fin_user_application, fin_application_status_history , fin_application_funding, fin_application_pledge
from sqlalchemy import func
from typing import List

from base import Session

router = APIRouter()

def get_db():
    db = Session()
    try: 
        yield db
    finally: 
        db.close()

@router.get("/application/{statusid}", tags=["Application"], response_model=List[PY_fin_user_application])
async def submit_applications_by_status(statusid: int, session: Session=Depends(get_db)):
    applications = session.query(fin_user_application).filter(fin_user_application.appstatusid==statusid).all()
    return applications

@router.get("/seeking-funding", tags=["Application"], response_model=List[PY_fin_user_application])
async def get_applications_needing_funding(session: Session=Depends(get_db)):
    applications = session.query(fin_user_application).filter(fin_user_application.appstatusid==4).all()
    for app in applications:
        app.application_funding = session.query(fin_application_funding).filter(fin_application_funding.application_id==app.applicationid).first()
        #app.application_funding.risk_category = "TEST"
        if (app.application_funding.risk_score < 1.2):
            app.application_funding.risk_category = "VERY LOW"
        elif(app.application_funding.risk_score < 3):
            app.application_funding.risk_category = "LOW"
        elif(app.application_funding.risk_score <=5):
            app.application_funding.risk_category = "MODERATE"
        elif(app.application_funding.risk_score <7):
            app.application_funding.risk_category = "HIGH"
        else:
            app.application_funding.risk_category = "VERY HIGH"
        app.application_funding.formatted_funding_end = app.application_funding.funding_end.strftime("%m/%d/%Y, %H:%M:%S")
        app.application_pledge_list = session.query(fin_application_pledge).filter(fin_application_pledge.applicationid==app.applicationid).all()
        app.application_currently_funded = session.query(func.sum(fin_application_pledge.fund_amount).label("application_currently_funded")).filter(fin_application_pledge.applicationid==app.applicationid).first()["application_currently_funded"]
        app.pcnt_funded = str(round((app.application_currently_funded / app.application_funding.funding_required) * 100,2))+"%"
    return applications

@router.put("/application/{statusid}/{applicationid}", tags=["Application"], response_model=PY_fin_user_application)
async def update_application_status(statusid:int, applicationid, session: Session=Depends(get_db)):
    application = session.query(fin_user_application).filter(fin_user_application.applicationid==applicationid).first()
    application.appstatusid=statusid
    status_history = fin_application_status_history(applicationid=applicationid, appstatusid=statusid,
    status_date=func.now())
    session.add(status_history)
    session.commit()
    return application

@router.put("/application", tags=["Application"], response_model=PY_fin_user_application)
async def update_application_status(app:PY_fin_user_application, session: Session=Depends(get_db)):
    application = session.query(fin_user_application).filter(fin_user_application.applicationid==app.applicationid).first()
    application.appstatusid = app.appstatusid
    application.personal_statement = app.personal_statement
    application.employment_status = app.employment_status
    application.employment_industry = app.employment_industry
    application.employment_duration = app.employment_duration
    application.yearly_income = app.yearly_income
    application.rental_history_duration = app.rental_history_duration
    application.rental_payment_amount = app.rental_payment_amount
    application.rental_late_payments = app.rental_late_payments
    status_history = fin_application_status_history(applicationid=app.applicationid, appstatusid=app.appstatusid,
    status_date=func.now())
    session.add(status_history)
    session.commit()
    return application

@router.post("/pledge",tags=["Application"], response_model=PY_fin_application_pledge)
async def submit_application(pledge: PY_fin_application_pledge, session: Session=Depends(get_db)):
    new_pledge = fin_application_pledge(applicationid=pledge.applicationid, userid=pledge.userid, fund_amount=pledge.fund_amount,
    fund_apr = pledge.fund_apr, fund_duration = pledge.fund_duration)
    session.add(new_pledge)   
    session.commit()
    return new_pledge

@router.post("/application", tags=["Application"], response_model=PY_fin_user_application)
async def submit_application(application: PY_fin_user_application, session: Session=Depends(get_db)):
    new_application = fin_user_application(userid = application.userid, personal_statement=application.personal_statement, 
    eduid=application.eduid, edu_area=application.edu_area, employment_status=application.employment_status, 
    yearly_income=application.yearly_income, empid=application.empid, employment_industry=application.employment_industry, 
    employment_duration=application.employment_duration, employment_contact_name=application.employment_contact_name, 
    employment_contact_phone=application.employment_contact_phone, rental_late_payments=application.rental_late_payments, 
    rental_history_duration=application.rental_history_duration, rental_payment_amount=application.rental_payment_amount, 
    rental_mail_address=application.rental_mail_address, rental_contact_name=application.rental_contact_name, 
    rental_contact_phone = application.rental_contact_phone, credit_score=application.credit_score, 
    monthly_debt_payments=application.monthly_debt_payments, hobbies_interests = application.hobbies_interests, 
    appstatusid=application.appstatusid)
    session.add(new_application)   
    session.commit()
    status_history = fin_application_status_history(applicationid=new_application.applicationid, appstatusid=new_application.appstatusid,
    status_date=func.now())
    session.add(status_history)
    session.commit()
    return new_application


