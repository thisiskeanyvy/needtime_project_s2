# À destination des personnes qui vont lire le code

## Tester le site localement :

Exécuter la commande suivante dans le dossier du site (fonctionne page par page) :

```bash
python3 -m http.server 
```

Sinon utiliser un serveur de développement tel que :

https://github.com/greggman/servez

ou autre...

## Pourquoi le code est illisible ?

Certains groupes ont tenté de voler notre site c'est pour cela que j'ai minifié du code, rennomé des fonctions avec des noms aléatoires et fais en sorte que sur la page index.html aucun texte ne soit directement dans le html et soit chargé depuis le DOM.

De plus, j'ai également splitté les strings caractères par caractères pour quelques textes répartis dans plusieurs fichiers JS pour décourager les personnes de comprendre le code ou les ralentir.

Cela permet de ne pas pouvoir se faire copier son site et ajoute une mesure de sécurité pour que personne ne puisse le modifier le texte avec un grep.

## Le site

Base en React, puis implémentation en vanilla JS
- avec du lottie files
- du gsap et autres
- tels que core-js etc...