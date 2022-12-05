from typing import Optional
from routers import fin_user, fin_property, fin_application
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origins = ["*"]
app.add_middleware(
    CORSMiddleware, 
    allow_origins=origins, 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(fin_user.router)
app.include_router(fin_property.router)
app.include_router(fin_application.router)


