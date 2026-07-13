from contextlib import asynccontextmanager

from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text
from sqlalchemy.orm import Session

from app.config import get_settings
from app.database import Base, engine, ensure_database_exists, get_db
from app.models import CompanyInfo, ContactInquiry, Service
from app.schemas import (
    CompanyInfoOut,
    ContactInquiryCreate,
    ContactInquiryOut,
    HealthOut,
    ServiceOut,
)
from app.seed import seed_if_empty

settings = get_settings()


@asynccontextmanager
async def lifespan(_: FastAPI):
    ensure_database_exists()
    Base.metadata.create_all(bind=engine)
    with next(get_db()) as db:
        seed_if_empty(db)
    yield


app = FastAPI(
    title="Mighty Works API",
    description="Backend API for the Mighty Works company website.",
    version="1.0.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origin_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/health", response_model=HealthOut)
def health(db: Session = Depends(get_db)) -> HealthOut:
    try:
        db.execute(text("SELECT 1"))
        return HealthOut(status="ok", database="connected")
    except Exception as exc:  # noqa: BLE001
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail=f"Database unavailable: {exc}",
        ) from exc


@app.get("/api/company", response_model=CompanyInfoOut)
def get_company(db: Session = Depends(get_db)) -> CompanyInfo:
    company = db.query(CompanyInfo).first()
    if not company:
        raise HTTPException(status_code=404, detail="Company information not found")
    return company


@app.get("/api/services", response_model=list[ServiceOut])
def list_services(db: Session = Depends(get_db)) -> list[Service]:
    return db.query(Service).order_by(Service.sort_order.asc()).all()


@app.post(
    "/api/contact",
    response_model=ContactInquiryOut,
    status_code=status.HTTP_201_CREATED,
)
def create_contact_inquiry(
    payload: ContactInquiryCreate,
    db: Session = Depends(get_db),
) -> ContactInquiry:
    inquiry = ContactInquiry(**payload.model_dump())
    db.add(inquiry)
    db.commit()
    db.refresh(inquiry)
    return inquiry


@app.get("/api/contact", response_model=list[ContactInquiryOut])
def list_contact_inquiries(db: Session = Depends(get_db)) -> list[ContactInquiry]:
    return (
        db.query(ContactInquiry)
        .order_by(ContactInquiry.created_at.desc())
        .limit(100)
        .all()
    )
