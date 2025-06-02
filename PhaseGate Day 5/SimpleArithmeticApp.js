const input = require("prompt-sync");
const prompt = input();

console.log("\t\t\t\tSIMPLE ARITHMETIC APP\n");

//let startTime = Date.now;


console.log(startTime);
let outer_counter = 0;
let correct_answer = 0;
while(outer_counter<10){
	let number1 = Math.floor(Math.random() * 1000);
	let number2 = Math.floor(Math.random() * 1000);

	let minuend = 0;
	let subtrahend = 0;


	if(number1>number2){
		minuend = number1;
		subtrahend = number2;
	};

	if(number1<number2){
		minuend = number2;
		subtrahend = number1;
	}

	inner_counter = 0;

	while(inner_counter<2){
		let result = minuend - subtrahend;

		console.log("What is " + minuend + " - " + subtrahend + " =");

		let userInput = Number(prompt("The answer is: "));

		if(userInput==result){
			console.log("BOOM!!! You got it.");
			inner_counter = inner_counter + 2;
			correct_answer = correct_answer +1;
		};

		if(userInput!=result){
			console.log("INCORRECT!!! Try again.");
			inner_counter++
		};

	};

outer_counter++;
};


console.log("Your score is: ", correct_answer);