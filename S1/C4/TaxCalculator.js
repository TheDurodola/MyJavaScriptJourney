const input = require("prompt-sync");
const prompt = input();

let counter = 0;
while(counter<3){
let name = prompt("Enter the name: ");
let earnings = Number(prompt("Enter total earning: "));
let tax = 0;

if(earnings<=30_000){
tax = earnings * 0.15;
};
if(earnings>30_000){
tax = earnings * 0.20;
};

console.log(name, "tax for the year is",tax);
counter++;

};
