function getEvenNumbers(array){
   return array.filter((number => number % 2 === 0));
}

module.exports = getEvenNumbers