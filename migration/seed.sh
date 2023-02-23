export PGUSER=fitwork_admin
export PGPASSWORD=fitwork
export PGHOST=localhost

psql -d fitwork -f populate.sql 