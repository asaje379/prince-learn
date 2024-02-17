### Programme informatique

> **Ensemble d'instructions** destinées à être executées par un ordinateur.

> Un programme a un code source et peut avoir un exécutable.

> Un code source est traduit par un compilateur pour donner un exécutable ou par un interpréteur (runtime).

> Les runtimes disponibles pour le langage JS sont : le navigateur, NodeJS, etc.

### Processus informatique

> Programme informatique en cours d'exécution. Un processus s'execute dans la RAM.

### **Fonctions**

> **Ensemble d'instructions d'un programme regroupé dans un bloc réutilisable.**

##### Caractéristiques d'une fonction

- Une fonction est exécutable.
- Une fonction est réutilisable.
- Une fonction doit pouvoir être considéré comme une instruction.

Pour créer une fonction en JS, on utilise l'identificateur **function**. En JS, on a deux sortes de fonctions : _fonctions anonymes_ et _fonctions nommées_

#### **Fonctions nommées**

```js
// Définition d'une fonction
function nomDeLaFunction(/* arguments de la fonctions */) {
  /* instructions */
}

// Définition d'une fonction somme avec deux arguments
function somme(a, b) {
  return a + b;
}

// Définition d'une fonction nulle
function nulle() {
  return;
}

nomDeLaFunction();
somme(3, 5);
nulle();
```

> Le mot clé **return** permet l'arrêt instantannée d'une fonction et le retour éventuel d'une valeur.

#### **Fonctions anonymes**

```js
// Fonction anonymes
const sumTwo = function (a) {
  // sumTwo est de type 'function'
  return a + 2;
};

sumTwo(4);

const greet = (name) => {
  console.log(`Bonjour ${name}`);
};

greet('Prince');
```
