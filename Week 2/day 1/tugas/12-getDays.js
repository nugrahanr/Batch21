/* Display year is kabisat and display month 

function getDays(month,year){
    
}

console.log(getDays("a",2021)); //inputan bulan harus dalam integer
console.log(getDays("2","year")); //inputan tahun harus dalam integer
console.log(getDays("m","year"));//inputan bulan & tahun harus dalam integer
console.log(getDays(2,2000)); //This month has 29 days, 2000 adalah tahun kabisat
console.log(getDays(8,2021)); //This month has 31 hari
*/

function getDays(month, year) {
    if (isNaN(month) || isNaN(year)) {
      return "Inputan bulan dan tahun harus dalam angka";
    } else if (month < 1 || month > 12) {
      return "Bulan harus dalam rentang 1-12";
    } else if (year % 1 !== 0) {
      return "Tahun harus dalam bilangan bulat";
    } else {
      const isKabisat = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
      //jika tahun bisa dibagi 4 dan tak bisa dibagi 100 atau bisa dibagi 400 = kabisat
      const daysInMonth = [31, isKabisat ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      //jumlah hari tiap bulan. jika tahun kabisat, hari februari = 29, jika tidak 28
      return `Bulan ini memiliki ${daysInMonth[month-1]} hari${isKabisat ? ", " + year + " adalah tahun kabisat" : ""}`;
      //kembalikan berupa string jml hari dalam bulan. [month-1] = indeks utk bulan dari 1, bukan 0
      //jika bukan kabisat, return jumlah hari saja
    }
  }
  
  console.log(getDays("a",2021)); //inputan bulan harus dalam integer
  console.log(getDays("2","year")); //inputan tahun harus dalam integer
  console.log(getDays("m","year"));//inputan bulan & tahun harus dalam integer
  console.log(getDays(2,2000)); //This month has 29 days, 2000 adalah tahun kabisat
  console.log(getDays(8,2021)); //This month has 31 hari
  


