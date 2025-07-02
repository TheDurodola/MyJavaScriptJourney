// const percent =(orignalArray)=> {

//     newArray = [];
//     for (let i = 0; i < orignalArray.length; i++) {
//         if (orignalArray[i].score >= 80 && orignalArray[i].score <=100 ) {
//             newArray.push(orignalArray[i].name);
//         }
//     }
//     return newArray;    
 
// }



const percent =(orignalArray)=> {
   orignalArray = orignalArray.filter(isWithinRange);
    return orignalArray.sort();    
}

function isWithinRange(value) {
  return value.score>=80 && value.score <= 100;
}

console.log(percent([{name: "Bolaji", score: 90},{name: "Kunle", score: 110},{name: "Femi", score: 20},{name: "Kemi", score: 80},]));


// const oops = {name: "Femi", score: 20};
// console.log(oops.name);