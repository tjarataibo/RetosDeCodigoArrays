//1º ejercicio computeAverageLengthOfWords
function computeAverageLengthOfWords(word1, word2) {
    return(word1.length+word2.length)/2;
  }

  module.exports = computeAverageLengthOfWords;

//2º ejercicio getNthElement
function getNthElement(array, n) {
    if(n === 0) return undefined;
    return array[n];
  }

  module.exports = getNthElement;


//3º ejercicio convertDoubleSpaceToSingle
function convertDoubleSpaceToSingle(str) {
  function convertDoubleSpaceToSingle(str) {
  return str.split("  ").join(" ")
}

  module.exports = convertDoubleSpaceToSingle;


//4º ejercicio areValidCredentials
function areValidCredentials(name, password) {
  if(name.length > 3 & password.length >= 8){
    return true
}
  else{
    return false
}

  module.exports = areValidCredentials;

//5º ejercicio findPairForSum
function findPairForSum(array, number) {

}
module.exports = findPairForSum;


//6º ejercicio filterOddElements SOLO FUNCIONA EN VISUAL, NO EN LMS

const filterOddElements = [1, 2, 3, 4, 5];
let output = filterOddElements.filter (element => {
  return element %2 == 1;
});
console.log(output);


//7º ejercicio "findShortestWordAmongMixedElements"
function findShortestWordAmongMixedElements(arr) {
 
}

//8º ejercicio

//9º ejercicio

//10º ejercicio

//11º ejercicio

//12º ejercicio

//13º ejercicio

//14º ejercicio

//15º ejercicio

//16º ejercicio
