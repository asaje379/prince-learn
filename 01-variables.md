# **Variables**

> Une variable est un emplacement mémoire qui permet de stocker une valeur.

Il existe deux grandes catégories de types de variables. Les variables de types **primitifs** et les variables de type **personnalisés**.

### **Types de variables**

#### **Types primitifs**

Ce sont les types simples et qui existent par défaut dans le langage.

En Javascript, nous avons les types primitifs suivants:

- number
- string
- boolean
- null
- undefined

#### **Types personnalisés**

> DS: Data Structure -- SD: Structures de Données

Ce sont les types complexes qui sont construits à partir des types primitifs et représente la plupart du temps des structures de données ou des instances de SD.

On reviendra en détails sur ces types dans la suite du cours.

### **Création et manipulation de variables**

En Javascript une variable se créer avec un identification. Un identificateur est un mot clé réservé du langage qui permet de spécifier le type de variable que l'on crée.

Pour créer une variable en JS, la syntaxe est la suivante :

```bash
identificateur nomDeLaVariable;
```

Il existe 3 identificateurs en JS qui sont **let**, **var** et **const**. L'identificateur **var** étant déprécié, nous focaliserons notre attention sur les identificateurs **let** et **const**

#### **let**

```js
let x; // Définition d'une variable --- x vaut undefined
x = 5; // Assignation de valeur à la variable x --- x vaut 5 -- x est de type number

let y = 10; // Définition et assignation

x = 'Salem'; // Réassignation de valeur -- changement de type  -- x est de type string

y = true; // Réassignation de valeur -- changement de type -- y est de type boolean

y = x; // Réassignation de valeur -- y vaut "Salem" -- changement de type

x = 0; // Réassignation -- x vaut 0; y vaut "Salem"

x = x + 3; // Réassignation -- x = 0 + 3 -- x = 3 -- Incrémentation
```

#### **const**

> Une constante est une variable qui prend une valeur fixe pendant toute l'exécution du programme. La valeur d'une constante ne peut pas changer dans le temps

```js
const x; // [ERREUR]
const x = 5; // x vaut 5
const y = 10;
x = y; // [ERREUR]
```

> Une constante est obligatoirement assignée d'une valeur lors de sa définition et ne peut pas être réassignée.
