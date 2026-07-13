#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"

echo "Starting MySQL (Docker Compose)..."
docker compose -f "$ROOT/docker-compose.yml" up -d

echo "Waiting for MySQL to become healthy..."
for _ in $(seq 1 40); do
  if docker compose -f "$ROOT/docker-compose.yml" exec -T mysql mysqladmin ping -h 127.0.0.1 -uroot -proot_secret --silent; then
    echo "MySQL is ready."
    exit 0
  fi
  sleep 2
done

echo "MySQL did not become ready in time." >&2
exit 1
