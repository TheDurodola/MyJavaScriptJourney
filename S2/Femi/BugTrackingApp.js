const arrayCleaner =(dirtyArray)=>  {

   dirtyArray = dirtyArray.filter(isBigEnough);
    return dirtyArray;


}


function isBigEnough(value) {
  return value>=1 && value <= 5;
}


console.log(arrayCleaner([1,2,3,4,5,6,7,8,6,4,3,2]));