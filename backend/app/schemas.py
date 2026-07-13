from datetime import datetime

from pydantic import BaseModel, EmailStr, Field


class ContactInquiryCreate(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    email: EmailStr
    phone: str | None = Field(default=None, max_length=40)
    service: str | None = Field(default=None, max_length=80)
    message: str = Field(min_length=10, max_length=4000)


class ContactInquiryOut(BaseModel):
    id: int
    name: str
    email: EmailStr
    phone: str | None
    service: str | None
    message: str
    created_at: datetime

    model_config = {"from_attributes": True}


class ServiceOut(BaseModel):
    id: int
    slug: str
    title: str
    summary: str
    sort_order: int

    model_config = {"from_attributes": True}


class CompanyInfoOut(BaseModel):
    name: str
    tagline: str
    about: str
    leadership_name: str
    leadership_title: str
    leadership_bio: str
    address_line1: str
    address_line2: str
    phone: str
    email: EmailStr
    gstn: str

    model_config = {"from_attributes": True}


class HealthOut(BaseModel):
    status: str
    database: str
