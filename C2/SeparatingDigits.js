const input = require("prompt-sync");
const prompt = input();



let number =  Number(prompt("Enter the 5 Digits number: "));


let div1 = number/10000;
let div2 = number/1000;
let div3 = number/100;
let div4 = number/10;
let div5 = number/1;

console.log("%d %d %d %d %d", div1, div2, div3, div4, div5)