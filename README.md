# dream-estate
Python installed on Windows 2008 R2 Server
Version 3.8.10 64 bit

# Create a virtual environment
pip install virtualenv
cd services
virtualenv env

# Activate venv with batch file
C:\Users\'Username'\venv\Scripts\activate.bat

# Inside the virtual environment, install the following
pip install sqlalchemy
pip install fastapi
pip install uvicorn
pip install pymysql