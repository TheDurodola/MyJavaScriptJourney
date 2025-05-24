const input = require("prompt-sync");
const prompt = input();

let number1 = Number(prompt("Enter your first number: "));
let number2 = Number(prompt("Enter your second number: "));


let number1Square = number1 * number1;
let number2Square = number2 * number2;

let addition = number1Square + number2Square;
let subtraction = number1Square - number1Square;

console.log(number1Square);
console.log(number2Square);
console.log(addition);
console.log(subtraction);

