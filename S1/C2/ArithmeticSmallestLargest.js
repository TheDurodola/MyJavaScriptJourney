const input = require("prompt-sync");
const prompt = input();

let number1 = Number(prompt("Enter your first number: "));
let number2 = Number(prompt("Enter your second number: "));
let number3 = Number(prompt("Enter your third number: "));


let sum = number1 + number2 + number3;
let average = sum/3;

console.log(sum)
console.log(average)

if(number1<number2 && number1<number3){
console.log("The first integer is the smallest.")};

if(number2<number1 && number2<number3){
console.log("The second integer is the smallest.")};

if(number3<number2 && number3<number1){
console.log("The third integer is the smallest.")};


if(number1>number2 && number1>number3){
console.log("The first integer is the largest.")};

if(number2>number1 && number2>number3){
console.log("The second integer is the largest.")};

if(number3>number2 && number3>number1){
console.log("The third integer is the largest.")};