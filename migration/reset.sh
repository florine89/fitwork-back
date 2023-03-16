## on s'identifie comme l'utilisateur de la BDD
export PGUSER=fitwork_admin
export PGPASSWORD=fitwork
export PGHOST=localhost
## on enlève les tables existantes
sqitch revert
#qui va créer des tables
sqitch deploy