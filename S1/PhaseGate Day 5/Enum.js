const input = require("prompt-sync");
const prompt = input();

let arrayOfPicks = [0,1,2,3,4,5,6,7,8,9]


//let questionGenerator = arrayOfPicks.sort(() => Math.random()-1)

let correctScore = 0;
let attempts = 0;

for(let loopOfDeath = 0; loopOfDeath < 9; loopOfDeath++){
let index = 0;

let questionGenerator = Math.floor(Math.random()*9);


let userQuestion = Number(prompt("\nChoose your question: "));



userQuestion = questionGenerator;

let arrayOfQuestions = ["Is the capital of Germany, Berlin?", "Is 2 a alphabet?", "Is A an alphabet?", "Is Nigeria a country?", "Is the capital of France, Paris?", "is the full name of the Acroynm AC called Air Cuban?", "Is the name of Lagos State Governor Durodola Abolaji Toliat?", "Is the name of this planet Mars?", "Is the currency used in Nigeria called Dollars?", "Is 10 x 9 = 88?"];


while(index!=3){



if(arrayOfQuestions[userQuestion]==arrayOfQuestions[0]){
	console.log("\n",arrayOfQuestions[0]);

	let arrayOfAnswers = ["a","b"];

	console.log("a) True b) False");

	let userAnswer = prompt("Choose your Answer: ");

	if(userAnswer==arrayOfAnswers[0]){
		console.log("Correct")
		index = 3;
		correctScore += 1;
		
	};

	if(userAnswer==arrayOfAnswers[1]){
		console.log("Incorrect")
		index +=1;
	};
	
	if(userAnswer!=arrayOfAnswers[1] && userAnswer!=arrayOfAnswers[0]){
		console.log("Invalid options");
	};

};



if(arrayOfQuestions[userQuestion]==arrayOfQuestions[1]){
	console.log(arrayOfQuestions[1]);

	let arrayOfAnswers = ["a","b"];


	console.log("a) True b) False");

	let userAnswer = prompt("Choose your Answer: ");

	if(userAnswer==arrayOfAnswers[0]){
		console.log("Correct")
		index = 3;
		correctScore += 1;

	};

	if(userAnswer==arrayOfAnswers[1]){
		console.log("Incorrect")
		index +=1;

	};
	
	if(userAnswer!=arrayOfAnswers[1] && userAnswer!=arrayOfAnswers[0]){
		console.log("Invalid options");
	};

};



if(arrayOfQuestions[userQuestion]==arrayOfQuestions[2]){
	console.log(arrayOfQuestions[2]);

	let arrayOfAnswers = ["a","b"];


	console.log("a) True b) False");

	let userAnswer = prompt("Choose your Answer: ");

	if(userAnswer==arrayOfAnswers[0]){
		console.log("Correct")
		index = 3;
		correctScore += 1;
	};

	if(userAnswer==arrayOfAnswers[1]){
		console.log("Incorrect")
		index +=1;

	};
	
	if(userAnswer!=arrayOfAnswers[1] && userAnswer!=arrayOfAnswers[0]){
		console.log("Invalid options");
	};

};



if(arrayOfQuestions[userQuestion]==arrayOfQuestions[3]){
	console.log(arrayOfQuestions[3]);

	let arrayOfAnswers = ["a","b"];


	console.log("a) True b) False");

	let userAnswer = prompt("Choose your Answer: ");

	if(userAnswer==arrayOfAnswers[0]){
		console.log("Correct")
		index = 3;
		correctScore += 1;

	};

	if(userAnswer==arrayOfAnswers[1]){
		console.log("Incorrect")
		index +=1;

	};
	
	if(userAnswer!=arrayOfAnswers[1] && userAnswer!=arrayOfAnswers[0]){
		console.log("Invalid options");
	};

};



if(arrayOfQuestions[userQuestion]==arrayOfQuestions[4]){
	console.log(arrayOfQuestions[4]);

	let arrayOfAnswers = ["a","b"];


	console.log("a) True b) False");

	let userAnswer = prompt("Choose your Answer: ");

	if(userAnswer==arrayOfAnswers[0]){
		console.log("Correct")
		index = 3;
		correctScore += 1;

	};

	if(userAnswer==arrayOfAnswers[1]){
		console.log("Incorrect")
		index +=1;

	};
	
	if(userAnswer!=arrayOfAnswers[1] && userAnswer!=arrayOfAnswers[0]){
		console.log("Invalid options");
		index +=1;

	};

};



if(arrayOfQuestions[userQuestion]==arrayOfQuestions[5]){
	console.log(arrayOfQuestions[5]);

	let arrayOfAnswers = ["a","b"];


	console.log("a) True b) False");

	let userAnswer = prompt("Choose your Answer: ");

	if(userAnswer==arrayOfAnswers[0]){
		console.log("Incorrect")
		index +=1;

	};

	if(userAnswer==arrayOfAnswers[1]){
		console.log("Correct")
		index = 3;
		correctScore += 1;

	};
	
	if(userAnswer!=arrayOfAnswers[1] && userAnswer!=arrayOfAnswers[0]){
		console.log("Invalid options");
	};

};



if(arrayOfQuestions[userQuestion]==arrayOfQuestions[6]){
	console.log(arrayOfQuestions[6]);

	let arrayOfAnswers = ["a","b"];


	console.log("a) True b) False");

	let userAnswer = prompt("Choose your Answer: ");

	if(userAnswer==arrayOfAnswers[0]){
		console.log("Incorrect")
		index +=1;

	};

	if(userAnswer==arrayOfAnswers[1]){
		console.log("Correct")
		index = 3;
		correctScore += 1;

	};
	
	if(userAnswer!=arrayOfAnswers[1] && userAnswer!=arrayOfAnswers[0]){
		console.log("Invalid options");
	};

};



if(arrayOfQuestions[userQuestion]==arrayOfQuestions[7]){
	console.log(arrayOfQuestions[7]);

	let arrayOfAnswers = ["a","b"];


	console.log("a) True b) False");

	let userAnswer = prompt("Choose your Answer: ");

	if(userAnswer==arrayOfAnswers[0]){
		console.log("Incorrect")
		index +=1;

	};

	if(userAnswer==arrayOfAnswers[1]){
		console.log("Correct")
		index = 3;
		correctScore += 1;

	};
	
	if(userAnswer!=arrayOfAnswers[1] && userAnswer!=arrayOfAnswers[0]){
		console.log("Invalid options");
	};

};



if(arrayOfQuestions[userQuestion]==arrayOfQuestions[8]){
	console.log(arrayOfQuestions[8]);

	let arrayOfAnswers = ["a","b"];


	console.log("a) True b) False");

	let userAnswer = prompt("Choose your Answer: ");

	if(userAnswer==arrayOfAnswers[0]){
		console.log("Incorrect")
		index +=1;

	};

	if(userAnswer==arrayOfAnswers[1]){
		console.log("Correct")
		index = 3;
		correctScore += 1;


	};
	
	if(userAnswer!=arrayOfAnswers[1] && userAnswer!=arrayOfAnswers[0]){
		console.log("Invalid options");
	};

};



if(arrayOfQuestions[userQuestion]==arrayOfQuestions[9]){
	console.log(arrayOfQuestions[9]);

	let arrayOfAnswers = ["a","b"];


	console.log("a) True b) False");

	let userAnswer = prompt("Choose your Answer: ");

	if(userAnswer==arrayOfAnswers[0]){
		console.log("Incorrect")
		index +=1;

	};

	if(userAnswer==arrayOfAnswers[1]){
		console.log("Correct")
		index = 3;
		correctScore += 1;

	};
	
	if(userAnswer!=arrayOfAnswers[1] && userAnswer!=arrayOfAnswers[0]){
		console.log("Invalid options");
	};

};
if(index==3){
attempts += 1;
}
};

let continuationQuestion = Number(prompt("\nEnter 0 to end the program and collate result: "));
if(continuationQuestion==0){

loopOfDeath=9;

};



}

console.log("CorrectScore/Attempts = " + correctScore + "/" + attempts);



