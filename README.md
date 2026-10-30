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

## 3. Deploy the frontend to GitHub Pages

This project can serve the frontend as a static site on GitHub Pages.

### Requirements

- GitHub repository with Pages enabled
- Branch used for deployment: `main`
- Source: `GitHub Actions`

### What is included

- Static export configuration in `frontend/next.config.ts`
- GitHub Actions workflow in `.github/workflows/deploy-pages.yml`
- `.nojekyll` file in `frontend/public/` so assets load correctly

### Steps

1. Push this repository to GitHub.
2. In the GitHub repository settings, go to `Settings -> Pages`.
3. Set the source to `GitHub Actions`.
4. Commit and push to `main`.
5. The workflow will build the static export and publish it automatically.

### Local build check

```bash
cd frontend
npm install
NEXT_PUBLIC_BASE_PATH=/your-repo-name npm run build
```

If you want to preview the exported static output locally, run:

```bash
cd frontend
npx serve out
```

The deployed site will be available at:

```text
https://<your-github-username>.github.io/<your-repository-name>/
```

## Contact form

Submissions are stored in the local SQLite file via `POST /api/contact`.

## Company details

- **Address:** No. 57/24, 5th Cross, Bhavani Layout, S G Palaya, Bengaluru, Karnataka 560029
- **Phone:** +91 62384 29889
- **Email:** mightyworksblr@gmail.com
- **GSTN:** 29BHDPV8330H1ZX
- **Leadership:** Saby Varghese, Project Manager
