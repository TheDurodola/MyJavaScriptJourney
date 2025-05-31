//Ex 4.34
const input = require("prompt-sync");
const prompt = input();


let num1 = Number(prompt("Enter your first figure: "));

let result = 0;
while(num1>result){
System.out.print("Enter your next figure: ");
let num2 = input.nextInt();
result = result + num2;
}

console.log("The sum of the additional figures are equal to %d which is greater than your initial figure %d",result, num1);
