/* hitung orang yg memiliki berat badan paling tinggi

function getHeavier(w1,wg2,wg3){
    
}

console.log(getHeavier(12,45,70));//70
 */

function getHeavier(w1, w2, w3) {
    return (w1 > w2 && w1 > w3) ? w1 : (w2 > w3 ? w2 : w3);
  } //jika w1 > w2 dan w1 > w3, maka w1 yang terberat, jika tidak bandingkan w2 dan w3
  
  console.log(getHeavier(12, 45, 70)); // 70


