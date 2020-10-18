#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  CREATE DATABASE blog;
  CREATE USER strapito WITH PASSWORD 'secret';
  GRANT ALL PRIVILEGES ON DATABASE blog TO strapito;
EOSQL
