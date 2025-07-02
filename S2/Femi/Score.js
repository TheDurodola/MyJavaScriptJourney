

const percent =(orignalArray)=> {
    newArray = [];
    for (let i = 0; i < orignalArray.length; i++) {
        if (orignalArray[i] >50) {
            newArray.push(orignalArray[i]);
        }
    }
return newArray;
}


console.log(percent([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]));