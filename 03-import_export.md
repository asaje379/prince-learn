## **Modules/Librairies**

> Un module (librairies) est un ensemble de fonctionnalités regroupées en une seule et qui peut être installé et réutiliser dans un autre projet.

> Le code source d'un module est généralement composé de fichiers et de dossiers (structures qui facilite la navigation dans le projet)

> Un fichier dans un module contient des fonctions et/ou des constantes qui peuvent être réutilisés.

## **Portée de variables**

Par défaut une variable, une constante ou une fonction créé dans un fichier ne peut être utilisé (accessible) que dans ce fichier.

On peut rendre une variable, une constante ou une fonction accessible depuis l'extérieur du fichier en rendant la variable, constante ou fonction **exportable**.

En JS, pour rendre une variable, une constante ou une fonction exportable, on utilise le mot clé **export**.

Il y a deux façons d'exporter une variable, une constante ou une fonction.

## **Exportation standard**

On utilise l'exportation standard généralement, lorsqu'on a plusieurs éléments à exporter depuis le fichier.

```js
export const MAX_NUMBER = 100;

export function greet(name) {
  return `Hello ${name}`;
}
```

## **Exportation par défaut**

On utilise l'exportation par défaut généralement, lorsqu'on a qu'un seul élément à exporter depuis le fichier.

```js
export default function App() {
  //
}

// ------------------------------

function App() {}

export default App;
```
