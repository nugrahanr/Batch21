/*
for (let i = 0; i < 6; i++) {

} 
// output 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 

for (let i = 0; i < 6; i++) {

}  

// output
// 5 4 3 2 1  
// 4 3 2 1  
// 3 2 1
// 2 1  
// 1 
*/

//jml baris
for (let i = 5; i >= 1; i--) { //i mulai dari 5. mundur 1 ke blkg sampai 1
    let row = '';
    for (let j = i; j >= 1; j--) { //angka
      row += j + ' ';
    }
    console.log(row);
  }
  

