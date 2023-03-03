/*input 4 digit integer lalu hitung jumlahnya


function sumDigit(n){
   
}

console.log(sumDigit(1234)); //10
console.log(sumDigit("1234"));//10
console.log(sumDigit(12345));//12345 harus lebih kecil dari 10000
console.log(sumDigit("a123"));//a123 is not number, try again...
 */

function sumDigit(n) {
    if (typeof n !== "number" && !/^\d+$/.test(n)) { //apakah n bukan number && hanya berisi 0-9 
      return `${n} is not number, try again...`;
    } else if (n >= 10000) {
      return `${n} harus lebih kecil dari 10000`;
    }
  
    let sum = 0;
    const str = String(n); //convert ke string
  
    for (let i = 0; i < str.length; i++) {
      sum += parseInt(str[i]); //sum bertambah dan di convert lagi ke angka
    }
  
    return sum;
  }
  
  console.log(sumDigit(1234)); //10
  console.log(sumDigit("1234")); //10
  console.log(sumDigit(12345)); //12345 harus lebih kecil dari 10000
  console.log(sumDigit("a123")); //a123 is not number, try again...
  

