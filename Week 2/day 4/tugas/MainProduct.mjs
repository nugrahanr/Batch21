/*
import Product from "./Product.mjs";

const prod1 = new Product(1, "Samsung A1", "HP", 2500000, 3);
const prod2 = new Product(2, "UltraBook", "COMPUTER", 7850000, 2);
const prod3 = new Product(3, "Mesin Cuci LG", "ELECTRONIC", 3500000, 1);
const prod4 = new Product(4, "IPHONE", "HP", 6000000, 2);
const prod5 = new Product(5, "Asus Laptop", "COMPUTER", 6500000, 4);

let listCart = [];


const totalTagihan = listCart.reduce((sum, el) => sum + el.subTotal, 0)
console.log(`Total Tagihan =${totalTagihan}`);//Total Tagihan =64700000

const totalTagihanDiscount = (discount) => {

}

console.log(`Total Tagihan discount=${totalTagihanDiscount(10)}`);//Total Tagihan discount=58580000
*/

import Product from "./Product.mjs";
//prod1-prod5 disebut instance dari class product
const prod1 = new Product(1, "Samsung A1", "HP", 2500000, 3);
const prod2 = new Product(2, "UltraBook", "COMPUTER", 7850000, 2);
const prod3 = new Product(3, "Mesin Cuci LG", "ELECTRONIC", 3500000, 1);
const prod4 = new Product(4, "IPHONE", "HP", 6000000, 2);
const prod5 = new Product(5, "Asus Laptop", "COMPUTER", 6500000, 4);

let listCart = [prod1, prod2, prod3, prod4, prod5]; //simpan produk yg akan dihitung

const totalTagihan = listCart.reduce((sum, el) => sum + el.subTotal, 0); //reduce: menjumlah nilai subtotal semua array jadi 1. sum: nilai akumulasi awal (0). el: akumulasi saat ini
console.log(`Total Tagihan = ${totalTagihan.toLocaleString()}`);

const totalTagihanDiscount = (discount) => {
  const totalTagihan = listCart.reduce((sum, el) => sum + el.subTotal, 0); 
  const totalTagihanDiskon = totalTagihan * (1 - discount / 100);
  return totalTagihanDiskon.toLocaleString(); //toLocaleString() untuk format output uang
}
console.log(`Total Tagihan discount = ${totalTagihanDiscount(10)}`);

