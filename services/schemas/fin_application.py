from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

class PY_fin_education_levels(BaseModel):
    eduid: int
    sort_order: int
    description: str
    class Config: 
        orm_mode = True

class PY_fin_employment_types(BaseModel):
    empid: int
    sort_order: int
    description: str
    class Config: 
        orm_mode = True

class PY_fin_application_statuses(BaseModel):
    appstatusid: int
    sort_order: int
    description: str
    class Config: 
        orm_mode = True

class PY_fin_application_status_history(BaseModel):
    hist_id: int
    applicationid: int
    appstatusid: int
    status_date: str
    class Config: 
        orm_mode = True

class PY_fin_application_funding(BaseModel):
    application_id: int
    risk_score: float
    risk_category: str
    funding_required: float
    funding_start: datetime
    funding_end: datetime
    formatted_funding_end: Optional[str]
    class Config: 
        orm_mode = True

class PY_fin_application_pledge(BaseModel):
    pledge_id: Optional[int]
    applicationid: int
    userid: int
    fund_amount: float
    fund_apr: float
    fund_duration: int
    class Config: 
        orm_mode = True
class PY_fin_role(BaseModel):
    roleid: int
    rolename: Optional[str]
    roledesc: Optional[str]
    class Config: 
        orm_mode = True
class PY_fin_user(BaseModel):
    userid: Optional[int]
    firstname: Optional[str]
    lastname: Optional[str]
    email: Optional[str]
    password: Optional[str]
    access_token: Optional[str]
    token_expiration: Optional[datetime]
    token_expiration_formatted: Optional[str]
    roles: Optional[List[PY_fin_role]]
    pledgeList: Optional[List[PY_fin_application_pledge]]
    errorMessage: Optional[str]
    class Config: 
        orm_mode = True
class PY_fin_user_application(BaseModel):
    applicationid: Optional[int]
    userid: int
    user: Optional[PY_fin_user]
    personal_statement: Optional[str]
    eduid: Optional[int]
    education_level: Optional[str]
    edu_area: Optional[str]
    employment_status: Optional[str]
    yearly_income: Optional[float]
    empid: Optional[int]
    employment_type: Optional[str]
    employment_industry: Optional[str]
    employment_duration: Optional[int]
    employment_contact_name: Optional[str]
    employment_contact_phone: Optional[str]
    rental_late_payments: Optional[str]
    rental_history_duration: Optional[int]
    rental_payment_amount: Optional[float]
    rental_mail_address: Optional[str]
    rental_contact_name: Optional[str]
    rental_contact_phone: Optional[str]
    credit_score: Optional[int]
    monthly_debt_payments: Optional[float]
    hobbies_interests: Optional[str]
    appstatusid: int
    application_status: Optional[str]
    application_funding: Optional[PY_fin_application_funding]
    application_pledge_list: Optional[List[PY_fin_application_pledge]]
    application_currently_funded: Optional[float]
    pcnt_funded: Optional[str]
    status_history: Optional[List[PY_fin_application_status_history]]
    errorMessage: Optional[str]
    class Config: 
        orm_mode = True



    


