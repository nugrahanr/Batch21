/* konversi fareinheit to kelvin
 * rumus Kelvin = (Fareinheit + 459.67)/1.8
 * 
 

function fareinheitToKelvin(fareinheit){
   
}

console.log(fareinheitToKelvin(45)); //Convert Fareinheit (45) to Kelvin = 280
console.log(fareinheitToKelvin("1")); //Convert Fareinheit (1) to Kelvin = 811
console.log(fareinheitToKelvin("F")); //Fareinheit must an number
*/

//kalau input fahrenheit harus number
function fareinheitToKelvin(fareinheit){
    if (typeof fareinheit !== 'number') {
      return 'Fareinheit must be a number';
    }
    const kelvin = (fareinheit + 459.67)/1.8;
    return `Convert Fareinheit (${fareinheit}) to Kelvin = ${kelvin}`;
  }
  
  console.log(fareinheitToKelvin(45)); //Convert Fareinheit (45) to Kelvin = 280.37222222222226
  console.log(fareinheitToKelvin("1")); //Fareinheit must be a number
  console.log(fareinheitToKelvin("F")); //Fareinheit must be a number

  //kalau input tak harus number
  function fareinheitToKelvin(fareinheit){
    if (isNaN(fareinheit)) {
      return "Fareinheit must a number";
    } else {
      let kelvin = (fareinheit + 459.67) / 1.8;
      return `Convert Fareinheit (${fareinheit}) to Kelvin = ${kelvin}`;
    }
  }
  
  console.log(fareinheitToKelvin(45)); //Convert Fareinheit (45) to Kelvin = 280.37222222222226
  console.log(fareinheitToKelvin("1")); //Convert Fareinheit (1) to Kelvin = 255.92857142857144
  console.log(fareinheitToKelvin("F")); //Fareinheit must a number
  

  