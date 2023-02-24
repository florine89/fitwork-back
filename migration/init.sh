export PGUSER=postgres
export PGHOST=localhost
dropdb fitwork
dropuser fitwork_admin
psql -f init_db.sql -d postgres
sqitch init fitwork --engine pg --target db:pg:fitwork