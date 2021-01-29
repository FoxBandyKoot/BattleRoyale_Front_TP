# BattleRoyale_Front_TP

React pour le front-end car :

il est possible de créer directement une PWA,
certains membres ont des connaissance sur React,
les enseignants sont également à l’aise avec la technologie
La maquette a été réalisé avec Adobe XD car plusieurs membres du groupe ont des connaissances sur l’outil

poolors.com a été pour le choix des couleurs

L’approche « mobile-first » a été privilégié

Les IDE utilisés sont Visual Studio Code (VSC)

L’extension Git Graph sur VSC a été utilisé pour faciliter le travail sur Git

Le patron d’architecture choisi pour le CSS est le 7-1 (github.com/HugoGiraudel/sass-boilerplate)

Les fichiers SCSS ont été préféré car plus modernes

Symfony (et api platforme) été choisi à la place de NodeJs et ExpressJs pour le back-end (pas encore commencé). Nous avons changé de technologie en raison du manque de temps. Nous avons donc choisis une technologie que nous connaissions mieux

MySQL a été choisi pour la base de données car c’est une technologie connue des membres du groupe et également très utilisée dans le monde

Heroku a été choisi pour le déploiement du back. Car c'est un outil gratuit qui permettait de déployer un back end Symfony.
Vercel a été choisi pour le deploiement du client car son utilisation a l’air simple, et nous a été conseillé par l’un des enseignants. Malheureusement, nous avons eu des soucis pour le relier au back (problème de CORS http-https)

Liens vers le back : 
http://salty-forest-02915.herokuapp.com/

utiliser la route /api/docs pour l'utiliser avec Postman

Liens vers le front :
https://battle-royale-fil-rouge-i7ws26e5k.vercel.app/
  
# Lancement du projet front en local 

Cloner le projet
$git clone le projet

Se positionner sur la branche develop
$git checkout develop 

Setup le projet
$npm install

Lancer le projet
$npm start

# Lancement du projet back en local 

Cloner le projet
$git clone le projet

Se positionner sur la branche develop
$git checkout develop 

Préparer les token JWT
$ mkdir -p config/jwt
$ openssl genpkey -out config/jwt/private.pem -aes256 -algorithm rsa -pkeyopt rsa_keygen_bits:4096
$ openssl pkey -in config/jwt/private.pem -out config/jwt/public.pem -pubout

Setup le projet
$composer install

Créer la base de donnée
$php bin/console doctrine:database:create
$php bin/console doctrine:schema:update --force

Lancer le projet
$php -S 127.0.0.1:8000 -t public

Project made by Namdegone Japhet, Brohan Alexis, Hamelin Nicolas, Lerenard Charly
