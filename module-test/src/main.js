import { func1 } from './app/func1.js';
import { func2 } from './app/func2.js';

const type = +process.argv[2];

/**
 * @param {number} type
 */
function test(type) {
  // if (type === 1) {
  //   // Appeler func1
  //   func1();
  // } else if (type === 2) {
  //   // Appeler func2
  //   func2();
  // } else {
  //   console.log('Erreur');
  // }

  switch (type) {
    case 1:
      func1();
      console.log('sqds');
      break;

    case 2:
      funct2();
      break;
    default:
      console.log('Erreur');
  }
}

test(type);
