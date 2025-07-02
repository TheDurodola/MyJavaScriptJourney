const input = require("prompt-sync");
const prompt = input();

let userInput = Number(prompt("Enter a number: "));
let largest = userInput;
let secondLargest = 0;
let loopCondition = 0;

while(loopCondition < 9){

userInput = Number(prompt("Enter a number: "));
if(userInput > largest){
largest = userInput;
};
if(userInput > secondLargest && userInput != largest){
secondLargest = userInput;
};
loopCondition++;
}

console.log("The largest number enter is: ",largest);
console.log("The second largest number enter is: ",secondLargest);