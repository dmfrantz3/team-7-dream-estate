from sqlalchemy import Column, Integer, String, Float, Date, Table, ForeignKey
from sqlalchemy.orm import relationship
from base import Base

class fin_mail_address(Base):
    __tablename__ = 'fin_mail_address'
    addrid = Column (Integer, primary_key = True)
    addr1 = Column(String)
    addr2 = Column(String)
    city = Column(String)
    state = Column(String)
    zip = Column(Integer)

class fin_property(Base):
    __tablename__ = 'fin_property'
    propid = Column(Integer, primary_key = True)
    addrid = Column(Integer, ForeignKey("fin_mail_address.addrid"))
    propvalue = Column(Float)
    totalshares = Column(Integer)
    description = Column(String)
    propfeatureimg = Column(String)
    address = relationship("fin_mail_address")
    #roles = relationship("fin_user_has_role")
class fin_property_feature(Base):
    __tablename__ = 'fin_property_feature'
    featureid = Column (Integer, primary_key = True)
    featuretitle = Column(String)
class fin_property_has_feature(Base):
    __tablename__ = 'fin_property_has_feature'
    fphfid = Column(Integer, primary_key = True)
    propid = Column(Integer, ForeignKey("fin_property.propid"))
    featureid = Column(Integer, ForeignKey("fin_property_feature.featureid"))
    featurevalue = Column(String)
    feature = relationship("fin_property_feature")


