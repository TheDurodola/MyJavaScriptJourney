const input = require("prompt-sync");
const prompt = input();

let userInput = Number(prompt("Enter a number: "));
let largest = userInput;
let loopCondition = 0;

while(loopCondition<9){

userInput = Number(prompt("Enter a number: "));
if(userInput>largest){
largest = userInput;
};
loopCondition++;
}

console.log("The largest number enter is: ",largest);