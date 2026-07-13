# Mighty Works

Company website for **Mighty Works** — a Bengaluru professional services firm specializing in interior fit-out, MEP works, ELV systems, and maintenance.

## Stack

| Layer | Technology |
| --- | --- |
| Frontend | Next.js (React) + TypeScript + Tailwind CSS |
| Backend | Python FastAPI |
| Database | MySQL 8 |

## Project structure

```text
mightyworks/
├── frontend/          # Next.js app
├── backend/           # FastAPI API
├── database/          # MySQL init scripts
└── docker-compose.yml # Local MySQL
```

## Prerequisites

- Node.js 20+
- Python 3.11+
- MySQL 8 (via Docker Compose **or** a local MySQL install)

## 1. Start MySQL

### Option A — Docker Compose (recommended)

```bash
docker compose up -d
```

### Option B — Local MySQL

Create a database and user matching `backend/.env`:

```sql
CREATE DATABASE mightyworks CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'mightyworks'@'%' IDENTIFIED BY 'mightyworks_secret';
GRANT ALL PRIVILEGES ON mightyworks.* TO 'mightyworks'@'%';
FLUSH PRIVILEGES;
```

Copy env files if needed:

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env.local
```

## 2. Start the backend

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

API docs: [http://localhost:8000/docs](http://localhost:8000/docs)

On startup the API will:

- create tables if missing
- seed company info and services

### API endpoints

- `GET /api/health`
- `GET /api/company`
- `GET /api/services`
- `POST /api/contact`
- `GET /api/contact`

## 3. Start the frontend

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form

Submissions from the website are stored in the `contact_inquiries` MySQL table via `POST /api/contact`.

## Company details

- **Address:** No. 57/24, 5th Cross, Bhavani Layout, S G Palaya, Bengaluru, Karnataka 560029
- **Phone:** +91 62384 29889
- **Email:** mightyworksblr@gmail.com
- **GSTN:** 29BHDPV8330H1ZX
- **Leadership:** Saby Varghese, Project Manager
