const input = require("prompt-sync");
const prompt = input();


let salary = 200;
let bonus = 0;


console.log("Item\t\t\tValue\n1\t\t\t239.99\n2\t\t\t129.75\n3\t\t\t99.95\n4\t\t\t350.89\n\nEnter 0 to calculate");

let loopCondition = 0;

while(loopCondition!=1){
let item = Number(prompt("Enter item(s) sold: "));

if(item==1){
bonus = bonus + 239.99;
console.log("Item 1 entered.")
};
if(item==2){
bonus = bonus + 129.75;
console.log("Item 2 entered.")
};
if(item==3){
bonus = bonus + 99.95;
console.log("Item 3 entered.")

};
if(item==4){
bonus = bonus + 350.89;
console.log("Item 4 entered.")
};
if(item==0){
loopCondition=1
};

}


bonus = bonus * 0.09;
let totalEarnings = salary + bonus;


console.log("Your total earning is: $"+totalEarnings);
