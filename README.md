# Mighty Works

Company website for **Mighty Works** — a Bengaluru professional services firm specializing in interior fit-out, MEP works, ELV systems, and maintenance.

## Stack

| Layer | Technology |
| --- | --- |
| Frontend | Next.js (React) + TypeScript + Tailwind CSS |
| Backend | Python FastAPI |
| Storage | SQLite (local file — no separate database server) |

## Project structure

```text
mightyworks/
├── frontend/   # Next.js app
└── backend/    # FastAPI API + SQLite file in backend/data/
```

## Prerequisites

- Node.js 20+
- Python 3.11+

No MySQL or Docker required.

## 1. Start the backend

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

API docs: [http://localhost:8000/docs](http://localhost:8000/docs)

On startup the API will:

- create `backend/data/mightyworks.db` if missing
- seed company info and services

### API endpoints

- `GET /api/health`
- `GET /api/company`
- `GET /api/services`
- `POST /api/contact`
- `GET /api/contact`

## 2. Start the frontend

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy env files if needed:

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env.local
```

## Contact form

Submissions are stored in the local SQLite file via `POST /api/contact`.

## Company details

- **Address:** No. 57/24, 5th Cross, Bhavani Layout, S G Palaya, Bengaluru, Karnataka 560029
- **Phone:** +91 62384 29889
- **Email:** mightyworksblr@gmail.com
- **GSTN:** 29BHDPV8330H1ZX
- **Leadership:** Saby Varghese, Project Manager
