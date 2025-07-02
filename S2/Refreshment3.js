const input = require("prompt-sync");
const prompt = input();

let num1 = Number(prompt("Enter a number: "));
let holder = num1
let sum = 0;
let sizeOfNum1 = 0;
let index = 1;

while (num1 / index >= 1) { 
    sizeOfNum1++;
    index *= 10;
}

index = index / 10;

for (let i = 0; i < sizeOfNum1; i++) {
    
    let picker = Math.floor(num1/index);
    num1 %=index;
    sum += (picker ** sizeOfNum1);
    index /= 10;

    if (index < 1) {
        break;
    }
}
console.log(holder==sum);