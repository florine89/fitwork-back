export PGUSER=fitwork_admin
export PGPASSWORD=fitwork
export PGHOST=localhost
#sqitch deploy 1.create_tables
#sqitch deploy 2.alter_mail
#sqitch deploy 3.delete+casccade
#sqitch deploy 4.cascade_article
#sqitch deploy 5.add_program_id
#sqitch deploy 6.add_favorite_id
sqitch deploy 7.populate2
