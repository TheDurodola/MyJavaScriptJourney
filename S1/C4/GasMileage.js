const input = require("prompt-sync");
const prompt = input();

let totalMilesPerGallons = 0;
let loopCondition = 0;
while(loopCondition!=1){
let milesDriven = Number(prompt("Enter the miles driven: "));
let gallonsUsed = Number(prompt("Enter the gallons using during the day trip: "));
let milesPerGallons = milesDriven/gallonsUsed;
totalMilesPerGallons = totalMilesPerGallons + milesPerGallons;

let loopEndContinuation = Number(prompt("If you wish to end the program and print your results enter -1: "));

if(loopEndContinuation == -1){loopCondition=1};

};


console.log("The total miles/gallons of all the trips is ", totalMilesPerGallons )