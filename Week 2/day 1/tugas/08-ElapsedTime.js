/* hitung detik ke dalam day, hour, minute and seconds



function getPeriodTimes(seconds) {
    
}

console.log(getPeriodTimes("700005A"));//700005A is not number
console.log(getPeriodTimes("700005"));//8 hari 2 jam 26 menit 45 detik
 */

function getPeriodTimes(seconds) {
    if (isNaN(seconds)) { //nilai second bukan angka?
      return `${seconds} is not a number`;
    } else {
      const day = Math.floor(seconds / (24 * 60 * 60));
      const hour = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
      const minute = Math.floor((seconds % (60 * 60)) / 60);
      const second = Math.floor(seconds % 60);
  
      return `${day} hari ${hour} jam ${minute} menit ${second} detik`;
    }
  }
  
  console.log(getPeriodTimes("700005A")); // 700005A is not a number
  console.log(getPeriodTimes("700005")); // 8 hari 2 jam 26 menit 45 detik  


