export PGUSER=fitwork_admin
dropdb fitwork
dropuser fitwork

psql -f init_db.sql -d fitwork
sqitch init fitwork --engine pg --target db:pg:fitwork
