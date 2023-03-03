/*
function showPrimeNumber(n){

}

function isPrime(n){


}

console.log(showPrimeNumber(100));
/**
2	3	5	7	11
13	17	19	23	29
31	37	41	43	47
53	59	61	67	71
73	79	83	89	97
*/

function showPrimeNumber(n){
    let result = '';
    let count = 0;

    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) { //i = prima?
        result += i + '\t'; //jika prima, isi result
        count++;
        if (count === 5) { //5 bilangan tiap baris
          result += '\n';
          count = 0;
        }
      }
    }
    return result;
  }
  
  function isPrime(n){
    if (n <= 1) { //n <= 1?, jika iya = false. prima > 1
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) { //mulai dari 2 sampai akar kuadrat n
      if (n % i === 0) { //jika n habis dibagi 1 = bukan prima. prima hanya bisa dibagi 1 dan bilangan itu sedniri
        return false;
      }
    }
    return true;
  }
  
  console.log(showPrimeNumber(100));
  

  