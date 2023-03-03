/*export default class Product{
    constructor(prodId,prodName, category, price=0,totalBuy=1){

    }

    setPrice(price){

    }

    setTotalBuy(total){

    }

    toString(){
    
    }

}
*/
  
export default class Product {
  constructor(prodId, prodName, category, price = 0, totalBuy = 1) {
    this.prodId = prodId;
    this.prodName = prodName;
    this.category = category;
    this.price = price;
    this.totalBuy = totalBuy;
    this.subTotal = price * totalBuy; //tambah properti subTotal dan hitung nilainya
  }

  setPrice(price) {
    this.price = price;
    this.subTotal = this.price * this.totalBuy; //hitung subTotal setelah price diperbarui
  }

  setTotalBuy(total) {
    this.totalBuy = total;
    this.subTotal = this.price * this.totalBuy; //update subTotal setelah totalBuy diperbarui
  }

  toString() {
    return `${this.prodName} - (${this.category}) - Rp.${this.price.toLocaleString()} x ${this.totalBuy}`;
  } //format IDR dgn toLocaleString()
}


  