const input = require("prompt-sync");
const prompt = input();

let number1 = Number(prompt("Enter your first number: "));
let number2 = Number(prompt("Enter your second number: "));
let number3 = Number(prompt("Enter your third number: "));
let number4 = Number(prompt("Enter your fourth number: "));
let number5 = Number(prompt("Enter your fifth number: "));


if(number1>number2 && number1>number3 && number1>number4 && number1>number5){
console.log("The First number is the largest")};
if(number2>number1 && number2>number3 && number2>number4 && number2>number5){
console.log("The Second number is the largest")};
if(number3>number2 && number3>number1 && number3>number4 && number3>number5){
console.log("The Third number is the largest")};
if(number4>number2 && number4>number3 && number4>number1 && number4>number5){
console.log("The Fourth number is the largest")};
if(number5>number2 && number5>number3 && number5>number1 && number5>number1){
console.log("The Fifth number is the largest")};



if(number1<number2 && number1<number3 && number1<number4 && number1<number5){
console.log("The First number is the smallest")};
if(number2<number1 && number2<number3 && number2<number4 && number2<number5){
console.log("The Second number is the smallest")};
if(number3<number2 && number3<number1 && number3<number4 && number3<number5){
console.log("The Third number is the smallest")};
if(number4<number2 && number4<number3 && number4<number1 && number4<number5){
console.log("The Fourth number is the smallest")};
if(number5<number2 && number5<number3 && number5<number1 && number5<number1){
console.log("The Fifth number is the smallest")};