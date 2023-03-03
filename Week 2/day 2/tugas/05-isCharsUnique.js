/*
function isCharsUnique(string){

}

console.log(isCharsUnique('abcdefg'));//true
console.log(isCharsUnique('abcdefga'));//false
*/

function isCharsUnique(string) {
    // objek kosong utk karakter yang ada
    let charObj = {};
  
    // iterasi karakter
    for (let i = 0; i < string.length; i++) {
      // jika karakter ada sebelumnya, maka string tdk unik
      if (charObj[string[i]]) {
        return false;
      } else {
        // jika karakter belum ada, tambah ke objek
        charObj[string[i]] = true;
      }
    }
  
    // jika karakter hanya muncul sekali = unik
    return true;
  }
  
  console.log(isCharsUnique('abcdefg'));//true
  console.log(isCharsUnique('abcdefga'));//false
  


