/*
function maxWordLength(params) {

}

console.log(maxWordLength("aku suka bootcamp sentul city"));//bootcamp
*/

function maxWordLength(params) {
    // pecah string jadi array dg whitespace
    const words = params.split(" ");
    
    // variabel utk kata terpanjang
    let longestWord = "";
    
    // loop melalui setiap kata dlm array, bandingkan dg kata terpanjang sblmnya
    words.forEach((word) => {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    });
    
    // return kata terpanjang
    return longestWord;
  }
  
  console.log(maxWordLength("aku suka bootcamp sentul city")); // bootcamp
  


