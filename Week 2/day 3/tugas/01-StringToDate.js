/* ubah value string ke date 
 *  gunakan split
 *  inputan s = bulan/hari/tahun

function strToDate(s){

}

console.log(strToDate('12/30/2021'));//Thu Dec 30 2021 00:00:00 GMT+0700 (Western Indonesia Time)
console.log(strToDate('12/aa/bb')); //12/aa/bb bad format date
*/

function strToDate(s) {
    const [month, day, year] = s.split('/'); //pisahkan s dgn /
    const date = new Date(year, month - 1, day); //indeks month mulai dari 0
    if (isNaN(date.getTime())) { //jika getTime = NaN, bad format date
      return `${s} bad format date`;
    } else {
      return date.toString(); //date -> string
    }
  }
  
  console.log(strToDate('12/30/2021')); // Thu Dec 30 2021 00:00:00 GMT+0700 (Western Indonesia Time)
  console.log(strToDate('12/aa/bb')); // 12/aa/bb bad format date  


