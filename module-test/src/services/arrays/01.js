/**
 * Ecrire une fonction qui prend en argument un tableau,
 * et retourne la somme des éléments du tableau.
 */

/**
 * This function returns the sum of items of a given array
 * @param {number[]} array
 * @returns {number}
 */
export function sumArray(array) {
  let sum = 0;

  for (const el of array) {
    sum = sum + el;
  }

  return sum;
}
