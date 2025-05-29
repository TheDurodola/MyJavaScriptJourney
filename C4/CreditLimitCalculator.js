const input = require("prompt-sync");
const prompt = input();



let accountNumber = Number(prompt("Enter account number: "));
let balance = Number(prompt("Enter balance at the beginning of the month: "));
let totalOfAllItems = Number(prompt("Enter total of all items charged by the customer this month: "));
let credit = Number(prompt("Enter total of all credits applied to the customer’s account this month: "));
let allowedCreditLimit = Number(prompt("Enter the allowed credit limit: "));


let newBalance = balance + totalOfAllItems - credit;

console.log("The new balance is", newBalance);

if(newBalance>allowedCreditLimit){
console.log("Credit limit exceeded")};