const input = require("prompt-sync");
const prompt = input();

let number1 = Number(prompt("Enter your first number: "));

let number1Square = number1 * number1;

if (number1>100){
	console.log("The number is greater than 100")
};
if (number1==100){
	console.log("The number is equal to 100")
};
if (number1<100){
	console.log("The number is less than 100")
};
if (number1!=100){
	console.log("The number is not equal than 100")
};

if (number1Square>100){
	console.log("The number squared is greater than 100")
};
if (number1Square==100){
	console.log("The number squared is equal to 100")
};
if (number1Square<100){
	console.log("The number squared is less than 100")
};
if (number1Square!=100){
	console.log("The number squared is not equal than 100")
};