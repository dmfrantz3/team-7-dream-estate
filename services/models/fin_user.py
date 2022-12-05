from sqlalchemy import Column, Integer, String, Date, Table, ForeignKey
from sqlalchemy.orm import relationship
from base import Base

class fin_user(Base):
    __tablename__ = 'fin_user'
    userid = Column(Integer, primary_key = True)
    email = Column(String)
    firstname = Column(String)
    lastname = Column(String)
    password = Column(String)
    #roles = relationship("fin_user_has_role")

class fin_user_has_role(Base):
    __tablename__ = 'fin_user_has_role'
    uhrid = Column(Integer, primary_key = True)
    userid = Column(Integer, ForeignKey("fin_user.userid"))
    roleid = Column(Integer, ForeignKey("fin_role.roleid"))
    role = relationship("fin_role")

class fin_role(Base):
    __tablename__ = 'fin_role'
    roleid = Column (Integer, primary_key = True)
    rolename = Column(String)
    roledesc = Column(String)
