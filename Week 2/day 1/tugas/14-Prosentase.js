/* Buat program untuk menampilkan prosentasi dari income

function getProsentase(start,end){
    
}

console.log(getProsentase("abc","bca"));//abc or bca harus dalam angka
console.log(getProsentase(600000.00,750000.00));//Total kenaikan income 25%
console.log(getProsentase(750000.00,650000.00));//Total penurunan income -14%
*/

function getProsentase(start, end) {
    // Memastikan input start dan end berupa angka
    if (typeof start !== 'number' || typeof end !== 'number') {
      return "Input harus berupa angka";
    }
  
    const selisih = end - start;
    const prosentase = (selisih / start) * 100;
  
    if (selisih > 0) {
      return `Total kenaikan income ${prosentase.toFixed(0)}%`;
    } else {
      return `Total penurunan income ${prosentase.toFixed(0)}%`;
    }
  }
  
  console.log(getProsentase("abc","bca")); // Input harus berupa angka
  console.log(getProsentase(600000.00,750000.00)); // Total kenaikan income 25%
  console.log(getProsentase(750000.00,650000.00)); // Total penurunan income -13%
  //jika end > start, maka income naik, dan sebaliknya


