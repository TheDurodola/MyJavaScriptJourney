const input = require("prompt-sync");
const prompt = input();



let number1 =  Number(prompt("Enter the number 1: "));
let number2 =  Number(prompt("Enter the number 2: "));
let number3 =  Number(prompt("Enter the number 3: "));
let number4 =  Number(prompt("Enter the number 4: "));
let number5 =  Number(prompt("Enter the number 5: "));





let countNegative = 0;
let countPositive = 0;
let countZero = 0;


if (number1 < 0){
countNegative = countNegative+1;
}
if (number2 < 0){
countNegative = countNegative+1;
}
if (number3 < 0){
countNegative = countNegative+1;
}
if (number4 < 0){
countNegative = countNegative+1;
}
if (number5 < 0){
countNegative = countNegative+1;
}


if (number1 > 0){
countPositive = countPositive+1;
}
if (number2 > 0){
countPositive = countPositive+1;
}
if (number3 > 0){
countPositive = countPositive+1;
}
if (number4 > 0){
countPositive = countPositive+1;
}
if (number5 > 0){
countPositive = countPositive+1;
}


if (number1 == 0){
countZero = countZero+1;
}
if (number2 == 0){
countZero = countZero+1;
}
if (number3 == 0){
countZero = countZero+1;
}
if (number4 == 0){
countZero = countZero+1;
}
if (number5 == 0){
countZero = countZero+1;
}


console.log("%nThe number of Negative figures is %d",countNegative);
console.log("The number of Positive figures is %d",countPositive); 
console.log("The number of Zero figures is %d",countZero);  
