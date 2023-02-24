## on s'identifie comme l'utilisateur de la BDD
export PGUSER=fitwork_admin
export PGPASSWORD=fitwork
export PGHOST=localhost
## on enlève les tables existantes
sqitch revert

## On crée les tables
sqitch deploy 1.create_tables 

## On remplis les colonnes
psql -U fitwork_admin -d fitwork -f deploy/populate.sql

## On modifie les tables avec les étapes restantes du plan.
sqitch deploy