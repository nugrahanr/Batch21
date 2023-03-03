/*
function isPalindrome(word){

}

console.log(isPalindrome('kasur ini rUsak'));//true
*/

function isPalindrome(word){
    // to lower case dan hilangkan karakter selain a-z
    const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '');
    // pecah string jadi karaktar, membalik string yang sudah bersih dari selain abjad, join lagi
    const reversedWord = cleanWord.split('').reverse().join('');
    // string yg sdh bersih = string yg dibalik?
    return cleanWord === reversedWord;
  }
  
  console.log(isPalindrome('kasur ini rUsak'));//true  


