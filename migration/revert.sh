export PGUSER=fitwork_admin
export PGPASSWORD=fitwork
export PGHOST=localhost
sqitch revert 1.create_tables
sqitch revert 2.populate
