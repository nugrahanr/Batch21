/** berapa banyak tahun kabisat antara tahun1 ke tahun2 

function howManyKabisat(year1,year2){

}

function isKabisat(year){

}

console.log(howManyKabisat(1997,2021));
*/

function howManyKabisat(year1, year2) {
    let count = 0;
    for (let i = year1; i <= year2; i++) { //loop 97 - 2021
      if (isKabisat(i)) {
        count++; //jika i = kabisat, hitung
      }
    }
    return count;
  }
  
  function isKabisat(year) {
    if (year % 4 === 0) { //year kelipatan 4? cek lagi ke bawah, jika bukan = false
      if (year % 100 === 0) { //kelipatan 100? 
        if (year % 400 === 0) { //kelipatan 400? true, sebaliknya false
          return true;
        } else {
          return false;
        }
      } else {
        return true; //kelipatan 4, tapi bukan 100
      }
    } else {
      return false; //bikan kelipatan 4
    }
  }
  
  console.log(howManyKabisat(1997, 2021)); // 6
  


