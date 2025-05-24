const input = require("prompt-sync");
const prompt = input();

let number1 = Number(prompt("Enter your first number: "));
let number2 = Number(prompt("Enter your second number: "));


number1Tripled = number1*number1*number1;
number2Squared = number2*number2;

let div2 = number1Tripled%number2Squared;

if (div2 == 0){
console.log("The number %d tripled is divisible by %d squared", number1,number2)};
if (div2 != 0){
console.log("The number %d tripled is not divisible by %d squared", number1,number2);
}