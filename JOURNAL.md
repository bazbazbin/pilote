# Journal

## 26/10/2026

- Installé Git et VS Code, premier commit.
- Bloqué : mon README n'était pas dans le dossier. Solution : `pwd` et `ls` pour vérifier où je suis.

## 28/10/2026 (semaine 3)

**Fait**

- Créé mon premier fichier index.html
- Ajouté à index.html un formulaire « Nouvelle tâche » : titre (obligatoire), description, échéance, priorité.
- Travaillé pour la première fois sur une branche (formulaire), puis fusionnée dans main et supprimée.

**Appris**

- label + for relié à l'id du champ : clic sur le texte = focus dans le champ, et lisible par les lecteurs d'écran.
- id sert dans la page (label, CSS, JS) ; name est le nom de la donnée envoyée par le formulaire.
- Une branche permet d'essayer sans toucher main ; on fusionne depuis la branche qui reçoit.
- Fast-forward : main n'avait pas bougé, il a juste avancé jusqu'au bout de la branche.

**Coincé**

- J'ai cru avoir « poussé » alors que j'avais seulement commité : commit = local, push = envoi sur GitHub.
- Après le merge, main n'était pas à jour sur GitHub : il fallait aussi faire git push.

**À retenir**

- git switch -c nom : créer une branche et y aller
- git push -u origin nom : 1er envoi d'une nouvelle branche
- git switch main puis git merge nom : fusionner
- git branch -d nom et git push origin --delete nom : supprimer la branche

## 30/10/2026 (semaine 4)

**Fait**

- Créé mon premier fichier css (style.css) pour ajouter du visuel et de la mise en forme à mon projet pilote
- Etape par étape, enrichi mon fichier css en apportant des attributs / valeurs à différentes propriétés, assez générales (root, balises générales) et plus spécifiques : classes, pseudo-classes
- En parallèle, ajusté mon fichier html pour lier mon css et intégrer les notions de classe

**Coincé**

- J'ai été coincé plusieurs fois avec certaines commandes git, notamment le delete
- J'ai aussi des difficultés avec le respect des règles d'écriture css, la compréhensions des commandes

**A retenir**

- La structure d'écriture css en cascade
- Le lien entre html et css
