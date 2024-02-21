## \*\*Structures conditionnelles

Les structures conditionnelles sont des éléments de programmation qui permettent de gérer plusieurs cas d'utilisation dans un programme. Pour pouvoir les manipuler on utilise les mot clés **if**, **else**, **else if** et **switch**.

### Ex: On veut écrire une fonction qui vérifie si un nombre est pair ou non.

> Deux cas d'utilisation sont possibles sur l'argument de la fonction : soit l'argument est pair, soit elle ne l'est pas.

```js
function isEven(arg) {
  if (arg % 2 === 0) {
    return true; // return provoque l'arrêt immédiat de la fonction.
  }

  return false;
}
```

### **if**

> **if** est l'équivalent de **si**.

```js
if (/* conditions */) {
  // instructions
}
```

### **else**

> **else** est l'équivalent de **sinon**

**else** s'utilise toujours à la suite d'un **if**.

```js
if (/* condition */) {
  // instructions
} else {
  // Instructions contraires
}
```

### **else if**

> **else if** (_en deux mots_) est l'équivalent de **sinon si**

**else if** s'utilise aussi à la suite d'un **if**.

La différence entre **else** et **else if** est que **else** se traduit plutôt comme **sinon, dans tous les autres cas** alors que **else if** se traduit par **sinon, dans le cas particulier où**

```js
if (/* conditions */) {
  // Instructions
} else if (/* conditions */) {
  // Autres instructions
} else if (/* conditions */ ) {
  // Autres instructions
} // ... Autant de else if que nécessaire
else {
  // Dans tous les autres cas
}
```

### **Ternaires**

Les opérateurs ternaires permettent de simplifier l'écriture d'un bloc **if/else**.

Les opérateurs ternaires sont : **?** et **:**.

```js
function isEven(arg) {
  if (arg % 2 === 0) {
    return true; // return provoque l'arrêt immédiat de la fonction.
  }

  return false;
}
```

peut s'écrire

```js
function isEven(arg) {
  if (arg % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
```

Avec les opérateurs ternaires, on pourra écrire:

```js
function isEven(arg) {
  return arg % 2 === 0 ? true : false;
}
```

> **cond ? a : b** peut se lire \*si cond est vrai alors a sinon b
