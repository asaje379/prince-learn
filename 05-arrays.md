## **Array**

Un tableau (**array**) est une structure de données qui permet de stocker en mémoire une collection d'objets contigüe en mémoire.

Dans les langages de bas niveau comme le C, un tableau est une collection d'objets de même nature. En JS, on peut stocker dans un array des informations de différents types.

Pour bien comprendre les tableaux, nous allons faire un ensemble d'exercices :

- créer un tableau
- accéder aux éléments d'un tableau
- parcourir un tableau
- ajouter un élément au début du tableau
- ajouter un élément à la fin du tableau
- ajouter un élément à un indice quelconque dans le tableau
- supprimer un élément au début du tableau
- supprimer un élément à la fin du tableau
- supprimer un élément à un indice quelconque dans le tableau
- algorithmes de recherches dans un tableau (recherche linéaire, recherche dichotomique)
- algorithmes de tri d'un tableau (bubble sort, insertion sort, selection sort, quick sort, merge sort)
- Dessiner une ligne
- Dessiner un rectangle plein
- Dessiner un reatangle creux
- Dessiner un triangle rectangle
- Dessiner un triangle isocèle

### **Créer un tableau**

Il existe deux façons de créer un tableau en JS.

> Première méthode

```js
const tab = []; // Création d'un tableau vide
const numberTab = [1, 2, 3, 4, 5]; // Création d'un tableau avec 5 élémentes
```

> Seconde méthode

```js
const tab = new Array();
const tenSizeTab = new Array(10); // Création d'un tableau vide de taille 10
```

### **Accéder aux éléments d'un tableau**

Pour accéder à un élément d'un tableau on utilise les crochets (**[]**) ou la méthode **at** en spécifiant l'indice de l'élément dans le tableau. Les indices des éléments dans un tableau en JS commencent par 0.

```js
const tab = [1, 2, 3, 4, 5];

const one = tab[0]; // one vaut 1
const three = tab[2]; // three vaut 2
const four = tab.at(3); // four vaut 4
```

### **Parcourir un tableau**

##### **Afficher les éléments d'un tableau**

Il y a plusieurs façon de parcourir un tableau en JS.

> Première méthode : **Listing complet**

```js
const tab = [1, 2, 3, 4, 5];

console.log(tab[0]); // 1
console.log(tab[1]); // 2
console.log(tab[2]); // 3
console.log(tab[3]); // 4
console.log(tab[4]); // 5
```

L'inconvénient de cette approche est qu'elle ne permet pas de parcourir efficacement un tableau de grande taille (taille > 100 par exemple).

> Seconde méthode : **while**

```js
const tab = [1, 2, 3, 4, 5];

let i = 0;

while (i < tab.length) {
  console.log(tab[i]);
  i++;
}
```

> Troisième méthode : **for classique**

```js
const tab = [1, 2, 3, 4, 5];

for (let i = 0; i < tab.length; i++) {
  console.log(tab[i]);
}
```

> Quatrième méthode : **for of**

```js
const tab = [1, 2, 3, 4, 5];

for (const el of tab) {
  console.log(el);
}
```

> Cinquième méthode : **foreach**

```js
const tab = [1, 2, 3, 4, 5];

tab.forEach((el) => {
  console.log(el);
});
```

### Exercice

1. Ecrire une fonction qui prend en argument un tableau, et retourne la somme des éléments du tableau.

2. Ecrire une fonction qui prend en argument un tableau et un nombre **x** et qui retourne la somme de tous les éléments du tableau multiplié par **x**.

3. Ecrire une fonction qui prend en argument un tableau et affiche les éléments du tableau dans l'ordre inverse

4. Ecrire une fonction qui prend en argument un tableau et retourne la plus petite valeur du tableau.

5. Ecrire une fonction qui prend en argument un tableau et affiche les éléments d'indice pair.

6. Ecrire une fonction qui prend en argument un tableau et affiche tous les nombres impairs contenus dans le tableau.
