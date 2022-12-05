from fastapi import APIRouter, Depends
from models.fin_property import fin_property, fin_property_feature, fin_property_has_feature
from schemas.fin_property import PY_fin_property, PY_fin_property_feature, PY_fin_property_has_feature
from typing import List

from base import Session

router = APIRouter()

def get_db():
    db = Session()
    try: 
        yield db
    finally: 
        db.close()

@router.get("/property/{propid}", tags=["Property"], response_model=PY_fin_property)
async def get_property_by_id(propid: int, session: Session=Depends(get_db)):
    property = session.query(fin_property).filter(fin_property.propid == propid).one()
    if (property):
        features = session.query(fin_property_has_feature).filter(fin_property_has_feature.propid == propid).all()
        for f in features:
            f.featuretitle = f.feature.featuretitle
        property.features = features
    return property

@router.get("/property", tags=["Property"], response_model=List[PY_fin_property])
async def get_property_list(session: Session=Depends(get_db)):
    properties = session.query(fin_property).all()

    for property in properties:
        features = session.query(fin_property_has_feature).filter(fin_property_has_feature.propid == property.propid).all()
        for f in features:
            f.featuretitle = f.feature.featuretitle
        property.features = features
    return properties

