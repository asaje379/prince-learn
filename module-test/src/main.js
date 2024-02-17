import { func1 } from './app/func1.js';

const type = +process.argv[2];

/**
 * @param {number} type
 */
function test(type) {
  if (type === 1) {
    // Appeler func1
    func1();
  } else if (type === 2) {
    // Appeler func2
  } else {
    console.log('Erreur');
  }
}

test(type);
