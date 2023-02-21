# INITIALISATION

## Sqitch

Installez Squitch selon la méthode adaptée en suivant [ce lien](https://sqitch.org/download/)

## Base de donnée

### au premier lancement

dans le dossier migration executer le script init.sh
`cd ./migration/`
`bash init.sh`

### ensuite

/!\ les étapes suivantes peuvent être répétées à chaque fois qu'un reset de la base de donnée est nécéssaire.

aller dans le dossier migration
`cd ./migration`
executer le script reset.sh
`bash reset.sh`
