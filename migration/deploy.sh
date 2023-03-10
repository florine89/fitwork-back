export PGUSER=fitwork_admin
export PGPASSWORD=fitwork
export PGHOST=localhost
export PGDATABASE=fitwork
sqitch deploy 1.create_tables
sqitch deploy 2.populate
