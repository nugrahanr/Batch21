 /**
  * hitung sales discount plus tax rate
  * function getSalesDiscount

 function getSalesDiscount(price,tax,discount){

 }

console.log(getSalesDiscount("a", 1,5));//Price harus dalam angka
console.log(getSalesDiscount(500, "pajak",5));//Pajak harus dalam angka
console.log(getSalesDiscount("harga", "pajak","discount"));//Price, Tax & Discount harus dalam angkaa
console.log(getSalesDiscount(4500, 10,5));
*/
/**
    Total Sales 	: Rp.4500 
    Discount (5%) 	: Rp.225
    PriceAfterDiscount 	: Rp.4275
    Pajak (10%) 	: Rp.427.5
    ----------------------------------
    TotalPayment 	: Rp.4702.5
 */

    function getSalesDiscount(price, tax, discount) {
        if (isNaN(price) || isNaN(tax) || isNaN(discount)) {
          return "Price, Tax & Discount harus dalam angka";
        } else {
          const totalSales = price;
          const discountAmount = (discount / 100) * totalSales;
          const priceAfterDiscount = totalSales - discountAmount;
          const taxAmount = (tax / 100) * priceAfterDiscount;
          const totalPayment = priceAfterDiscount + taxAmount;
          return `Total Sales\t: Rp.${totalSales}\nDiscount (${discount}%)\t: Rp.${discountAmount}\nPriceAfterDiscount\t: Rp.${priceAfterDiscount}\nPajak (${tax}%)\t: Rp.${taxAmount}\n----------------------------------\nTotalPayment\t: Rp.${totalPayment}`;
        } 
      }
      
      console.log(getSalesDiscount("a", 1, 5)); //Price harus dalam angka
      console.log(getSalesDiscount(500, "pajak", 5)); //Pajak harus dalam angka
      console.log(getSalesDiscount("harga", "pajak", "discount")); //Price, Tax & Discount harus dalam angkaa
      console.log(getSalesDiscount(4500, 10, 5));
      


