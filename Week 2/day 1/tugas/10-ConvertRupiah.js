/* Convert rupiah to other currency


function convertToRupiah(money,type){
    
}

console.log(convertToRupiah(1000,'yen'));//1000 yen  = Rp.130.120
console.log(convertToRupiah(100,'usd'));//100 dollar  = Rp.1.438.250
console.log(convertToRupiah(100,'euro'));//100 dollar  = Rp.1.600.000
console.log(convertToRupiah(100,''));//no match type currency
 */

function convertToRupiah(money, type) {
    let rate;
    switch (type) {
      case "usd":
        rate = 14382.50;
        break;
      case "euro":
        rate = 16000;
        break;
      case "yen":
        rate = 130.12;
        break;
      default:
        return "no match type currency";
    }
    const result = money * rate;
    return `${money} ${type.toUpperCase()} = Rp.${result.toLocaleString("id-ID")}`;
    //toLocaleString : mengubah anfka jadi string dengan pemisah ribuan
  }
  
  console.log(convertToRupiah(1000, "yen")); // 1000 YEN = Rp.130.120
  console.log(convertToRupiah(100, "usd")); // 100 USD = Rp.1.438.250
  console.log(convertToRupiah(100, "euro")); // 100 EURO = Rp.1.600.000
  console.log(convertToRupiah(100, "")); // no match type currency
  

