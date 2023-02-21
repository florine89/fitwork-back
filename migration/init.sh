psql -f init_db.sql -d postgres
sqitch init fitwork --engine pg --target db:pg:fitwork
