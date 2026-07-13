from sqlalchemy.orm import Session

from app.models import CompanyInfo, Service

COMPANY = {
    "name": "Mighty Works",
    "tagline": "Interior, MEP & ELV solutions built to last.",
    "about": (
        "Mighty Works is a Bengaluru-based professional services company specializing in "
        "Interior works, MEP works, ELV solutions and maintenance. We deliver dependable "
        "and cost-effective solutions for residential, commercial, and institutional projects."
    ),
    "leadership_name": "Saby Varghese",
    "leadership_title": "Project Manager",
    "leadership_bio": (
        "Led by Saby Varghese, Project Manager with over 25 years of experience across India "
        "and the Middle East, including landmark projects such as Dubai Metro, Dubai Airport, "
        "Tulah Wellness Project and more."
    ),
    "address_line1": "No. 57/24, 5th Cross, Bhavani Layout",
    "address_line2": "S G Palaya, Bengaluru, Karnataka 560029",
    "phone": "+91 62384 29889",
    "email": "mightyworksblr@gmail.com",
    "gstn": "29BHDPV8330H1ZX",
}

SERVICES = [
    {
        "slug": "interior",
        "title": "Interior fit-out & coordination",
        "summary": (
            "End-to-end interior fit-out with careful coordination across trades, "
            "so spaces finish clean, functional, and on schedule."
        ),
        "sort_order": 1,
    },
    {
        "slug": "mep",
        "title": "MEP works",
        "summary": (
            "Electrical, plumbing, and mechanical works executed with precision for "
            "residential, commercial, and institutional buildings."
        ),
        "sort_order": 2,
    },
    {
        "slug": "elv",
        "title": "ELV systems",
        "summary": (
            "CCTV, access control, automation, and related low-voltage systems designed "
            "for reliability and day-to-day usability."
        ),
        "sort_order": 3,
    },
    {
        "slug": "maintenance",
        "title": "Annual & preventive maintenance",
        "summary": (
            "Planned maintenance programmes that keep systems performing, reduce downtime, "
            "and protect your long-term investment."
        ),
        "sort_order": 4,
    },
]


def seed_if_empty(db: Session) -> None:
    if db.query(CompanyInfo).count() == 0:
        db.add(CompanyInfo(**COMPANY))

    if db.query(Service).count() == 0:
        db.add_all([Service(**service) for service in SERVICES])

    db.commit()
