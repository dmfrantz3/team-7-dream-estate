from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import sys, os

# MUST HAVE ENVIRONMENT VARIABLE SET TO DB CONNECTION STRING
try:
    engine = create_engine(os.environ['DREAMESTATE_DB_CONNECTION_STRING'], pool_pre_ping=True)
except KeyError:
    print('[error]: <DREAMESTATE_DB_CONNECTION_STRING> environment variable not set.')

Session = sessionmaker(bind=engine)
Base = declarative_base()
