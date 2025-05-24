const input = require("prompt-sync");
const prompt = input();

let radius = Number(prompt("Enter the radius of the Circle: "));


let diameter = 2*radius;
let circumference = 2 * 3.14159 * radius;
let area = 3.14159 * radius * radius;

console.log(diameter)
console.log(circumference)
console.log(area)