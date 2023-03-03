/*
function isArraysEqual(arrayA, arrayB) {

}

const fruitNamesA = ['rambutan', 'durian', 'jeruk', 'nangka'];
const fruitNamesB = ['rambutan', 'durian', 'jeruk', 'nangka'];
const fruitNamesC = ['anggur', 'apel', 'mangga', 'alpukat'];
console.log(isArraysEqual(fruitNamesA, fruitNamesB)); // true
console.log(isArraysEqual(fruitNamesA, fruitNamesC)); // false
*/

function isArraysEqual(arrayA, arrayB) {
    if (arrayA.length !== arrayB.length) {
      return false;
    }
    for (let i = 0; i < arrayA.length; i++) {
      if (arrayA[i] !== arrayB[i]) { //indeks [i] array a != array b?
        return false;
      }
    }
    return true;
  }
  
  const fruitNamesA = ['rambutan', 'durian', 'jeruk', 'nangka'];
  const fruitNamesB = ['rambutan', 'durian', 'jeruk', 'nangka'];
  const fruitNamesC = ['anggur', 'apel', 'mangga', 'alpukat'];
  console.log(isArraysEqual(fruitNamesA, fruitNamesB)); // true
  console.log(isArraysEqual(fruitNamesA, fruitNamesC)); // false  


