from pydantic import BaseModel
from typing import Optional, List

class PY_fin_mail_address(BaseModel):
    addrid: int
    addr1: str
    addr2: Optional[str]
    city: str
    state: str
    zip: int
    class Config: 
        orm_mode = True

class PY_fin_property_feature(BaseModel):
    featureid: int
    featuretitle: str
    class Config: 
        orm_mode = True

class PY_fin_property_has_feature(BaseModel):
    featureid: int
    propid: int
    featurevalue: str
    featuretitle: Optional[str]
    feature: Optional[PY_fin_property_feature]
    class Config: 
        orm_mode = True

class PY_fin_property(BaseModel):
    propid: int
    addrid: int
    propvalue: float
    totalshares: int
    description: str
    propfeatureimg: Optional[str]
    address: PY_fin_mail_address
    features: Optional[List[PY_fin_property_has_feature]]
    class Config: 
        orm_mode = True

