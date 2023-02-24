export PGUSER=postgres

# On supprimer la DB & user
dropdb fitwork
dropuser fitwork_admin

# je veux lancer le script
psql -f init_db.sql -d postgres

# j'initialise SQITCH
sqitch init fitwork --engine pg --target db:pg:fitwork
