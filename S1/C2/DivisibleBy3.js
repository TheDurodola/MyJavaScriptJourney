const input = require("prompt-sync");
const prompt = input();

let num1 = Number(prompt("Enter your first number: "));

div2 = (num1%3);

if (div2 == 0){
console.log("The number %d is divisible by 3", num1)};
if (div2 != 0){
console.log("The number %d is not divisible by 3", num1);
}