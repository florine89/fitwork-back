## on commence par s'identifier en tant que superAdmin postgres, les identifiants :
export PGUSER=postgres
export PGHOST=localhost

## On supprime la bdd et l'utilisateur propriétaire
dropdb fitwork
dropuser fitwork_admin

## on crée la base de donnée et son utilisateur associé
psql -f init_db.sql -d postgres

## on attache sqitch au projet
sqitch init fitwork --engine pg --target db:pg:fitwork

