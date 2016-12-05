# MilkyWay
## Projet site vitrine DUT Info Groupe S4 2016

### Architecture du site

### Team

Anthony :
- Accueil
- Contact
- Planètes

Benjamin :
- FAQ
- Team 
- Recrutement 

## Ajout de Projet GitHub en local

```bash
$ sudo apt-get install git
# Installation

$ git init
# Initialisation du repo Git en local

$ touch readme.md
# Ajout d'un fichier

$ git add .

$ git commit -m "First commit"

$ git remote add origin https://github.com/MaxDEP/MilkyWay.git
# Ajout du réseau GitHub

$ git remote -v
# Vérification

$ git branch --set-upstream-to=origin/master master
# Facultatif
```
### Après avoir fait des modifications sur un ou plusieurs fichiers
```bash
$ git add <fichier ou dossier>
$ git commit -m "<Message>"
```
### Exportation et Importation
```bash
$ git pull
# Récupère tous

$ git push
# Envoie tous
```
