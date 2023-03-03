/* Hitung pajak dari total penjualan
 * function getSalesTax(price, tax)

function getSalesTax(price, tax) {
        
}

console.log(getSalesTax("a", 1));//Price harus dalam angka
console.log(getSalesTax(500, "pajak"));//Price & Pajak harus dalam angka
console.log(getSalesTax("harga", "pajak"));//Pajak harus dalam angka
console.log(getSalesTax(4500, 5));
*/
/**
 Total Sales : Rp.4500
 Pajak : 0.5
 TotalHarga+Pajak : Rp.4505
 
*/

function getSalesTax(price, tax) {
    if (isNaN(price)) {
        return "Price harus dalam angka";
    } else if (isNaN(tax)) {
        return "Pajak harus dalam angka";
    } else {
        const totalSales = price;
        const taxRate = tax / 100;
        const totalTax = totalSales * taxRate;
        const totalPrice = totalSales + totalTax;
        return `Total Sales : Rp.${totalSales}\nPajak : ${taxRate}\nTotalHarga+Pajak : Rp.${totalPrice}`;
    } //harga barang 4500, pajak 5% = 225. jadi total harga seteleh pajak = 4725 bukan 4505
}

console.log(getSalesTax("a", 1)); // Price harus dalam angka
console.log(getSalesTax(500, "pajak")); // Price & Pajak harus dalam angka
console.log(getSalesTax("harga", "pajak")); // Pajak harus dalam angka
console.log(getSalesTax(4500, 5));


