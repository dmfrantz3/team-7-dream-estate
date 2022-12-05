from sqlalchemy import Column, Integer, String, Float, Date, Table, ForeignKey, DateTime, func
from sqlalchemy.orm import relationship
from base import Base

class fin_education_levels(Base):
    __tablename__ = 'fin_education_levels'
    eduid = Column(Integer, primary_key = True)
    sort_order = Column(Integer)
    description = Column(String)

class fin_employment_types(Base):
    __tablename__ = 'fin_employment_types'
    empid = Column(Integer, primary_key = True)
    sort_order = Column(Integer)
    description = Column(String)

class fin_application_statuses(Base):
    __tablename__ = 'fin_application_statuses'
    appstatusid = Column(Integer, primary_key = True)
    sort_order = Column(Integer)
    description = Column(String)

class fin_application_funding(Base):
    __tablename__ = 'fin_application_funding'
    application_id = Column(Integer, primary_key = True)
    risk_score = Column(Float)
    funding_required = Column(Float)
    funding_start = Column(DateTime)
    funding_end = Column(DateTime)

class fin_application_pledge(Base):
    __tablename__ = 'fin_application_pledge'
    pledge_id = Column(Integer, primary_key = True ) 
    applicationid = Column(Integer, ForeignKey("fin_user_application.applicationid"))
    userid = Column(Integer, ForeignKey("fin_user.userid"))
    fund_amount = Column(Float)
    fund_apr = Column(Float)
    fund_duration = Column(Integer)

class fin_user_application(Base):
    __tablename__ = 'fin_user_application'
    applicationid = Column(Integer, primary_key = True)
    userid = Column(Integer, ForeignKey("fin_user.userid"))
    personal_statement = Column(String)
    eduid = Column(Integer, ForeignKey("fin_education_levels.eduid"))
    edu_area = Column(String)
    employment_status = Column(String)
    yearly_income = Column(Float)
    empid = Column(Integer, ForeignKey("fin_employment_types.empid"))
    employment_industry = Column(String)
    employment_duration = Column(Integer)
    employment_contact_name = Column(String)
    employment_contact_phone = Column(String)
    rental_late_payments = Column(String)
    rental_history_duration = Column(Integer)
    rental_mail_address = Column(String)
    rental_payment_amount = Column(Float)
    rental_contact_name = Column(String)
    rental_contact_phone = Column(String)
    credit_score = Column(Integer)
    monthly_debt_payments = Column(Float)
    hobbies_interests = Column(String)
    appstatusid = Column(Integer, ForeignKey("fin_application_statuses.appstatusid"))

class fin_application_status_history(Base):
    __tablename__='fin_application_status_history'
    hist_id = Column(Integer, primary_key = True)
    applicationid = Column(Integer, ForeignKey("fin_user_application.applicationid"))
    appstatusid = Column(Integer, ForeignKey("fin_application_statuses.appstatusid"))
    status_date = Column(DateTime(timezone=True), server_default=func.now())
