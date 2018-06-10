# TD Simple Blog

## Objectifs

Vous devrez réaliser une application web à l'aide du framework express (ou autre),
et de la base de données orienté documents MongoDB


## Introduction

Nous souhaitons développer un simple moteur de blog
Celui-ci devra:

* lister les articles en page d'accueil (titre, date, auteur, résumé)
* afficher dans sa totalité les articles sur une page dédié
* ajouter un article
* Supprimer un article

Bien évidemment, les tests devront passer et il faudra ajouter au moins un test *pertinent* par route!

## Modélisation des données

Définir le schéma de la base en quelques phrases, avec un exemple d'entrée au format JSON. 
Écrire un script permettant de remplir la base avec des données générées aléatoirement.

_Note: il faudra un identifiant unique pour chaque article !_


## Afficher la liste des articles

Faire une page web permettant d'afficher la liste des articles. Bonus si la pagination est gérée.
La page devra s'afficher à la route `*/*`

Quel verbe HTTP utiliser ? GET

## Afficher un article

Faire en sorte qu'un article avec l'identifiant unique ID s'affiche à la route `*/post/<ID>*`

## Entrer un article

Créer un formulaire pour taper un article sur la route `*/post/create*`  
Le formulaire devra enclencher une action sur la même route, quel verbe HTTP utiliser? POST


## Supprimer un article

Ajouter une route `*/post?<ID>>*` pour supprimer un article, quel verbe HTTP utiliser.GET

## Permettre la suppression d'un article

Ajouter un lien cliquable en bas de l'article permettant de supprimer l'article.

## Des Tests

N'oubliez pas d'écrire des tests supplémentaires!


## Notation

Vous pourrez travailler par groupes, de préférence par 2, maximum 3.

Vous devrez me rendre:

* votre projet sous forme de pull request github (une par étudiant)
* un dump de votre base
* un fichier AUTHORS avec le nom et le mail de chacun
* un fichier README expliquant comment déployer votre projet


Pensez à commenter votre projet en expliquant vos choix, par rapport aux questions posées.


Vous serez noté, en fonction:

* de la _propreté_ du code (coding standards, choix de nommage, organisation du project, architecture)
* de la méthode de travail (versionning, tests, etc.)
* de la conception
* bonus pour la prise de risque (utilisation de technos différentes, petits plus)

