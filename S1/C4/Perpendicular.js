//Ex 4.37
const input = require("prompt-sync");
const prompt = input();


let x1 = Number(prompt("Enter x1"));
let x2 = Number(prompt("Enter x2"));
let y1 = Number(prompt("Enter y1"));
let y2 = Number(prompt("Enter y2"))


if(x1==x2){
console.log("The x1 and x2 are perpendicular to the X-axis")};
if(y1==y2){
console.log("\nThe y1 and y2 are perpendicular to the y-axis")};
if (y1!=y2){
console.log("The y1 and y2  not perpendicular to  Y-axis")};
if (x1!=x2){
console.log("\nThe x1 and x2 are not perpendicular to X-axis")};
