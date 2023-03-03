/*
onst checkPermute = function(stringOne, stringTwo) {
    // if different lengths, return false

    // else sort and compare 
    // (doesnt matter how it's sorted, as long as it's sorted the same way)

  };
  
  console.log(checkPermute('aba', 'aab'))//true;
  console.log(checkPermute('aba', 'aaba'))//false;
  console.log(checkPermute('aba', 'aa'))//false;
*/

const checkPermute = function(stringOne, stringTwo) {
    // jika length !==, return false
    if (stringOne.length !== stringTwo.length) {
      return false;
    }
  
    // else, sorting dan bandingkan
    // terpenting diurutkan dg cara yg sama
    const sortedStringOne = stringOne.split('').sort().join('');
    const sortedStringTwo = stringTwo.split('').sort().join('');
    //split: memecah string jadi array. sort: sorting alfabetis. join: jika sdh di-sorting, urutkan lagi jadi string
    return sortedStringOne === sortedStringTwo;
  };
   
  console.log(checkPermute('aba', 'aab'))//true;
  console.log(checkPermute('aba', 'aaba'))//false;
  console.log(checkPermute('aba', 'aa'))//false;
  

