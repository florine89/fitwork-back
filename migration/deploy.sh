export PGUSER=fitwork_admin
export PGPASSWORD=fitwork
export PGHOST=localhost
#sqitch revert 1.create_tables
#sqitch revert 2.alter_mail
#sqitch revert 3.delete+casccade
sqitch revert 4.cascade_article