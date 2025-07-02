const input = require("prompt-sync");
const prompt = input();


let balance = 0;




let loop_condition = 0
while(loop_condition!=1){
console.log("\t\tBANK ATM SIMULATION\n\n1.Deposit\n2.Withdrawal\n3.View Transactions\n0.Exit\n");
let mainMenuNavigator = Number(prompt("Enter your choice: "))

if(mainMenuNavigator == 1){
amountDeposited = Number(prompt("Enter the amount: ₦"));
balance = deposit(balance,amountDeposited)
}
if(mainMenuNavigator == 2){
amountWithdrawn = Number(prompt("Enter the amount: ₦"));
balance = withdraw(balance,amountWithdrawn)
}
if(mainMenuNavigator == 3){
loop_condition = 1
}
if(mainMenuNavigator == 0){loop_condition = 1}


}




function deposit(balance, amount){
	if(amount>0){
		balance = balance + amount;
		console.log("Your balance is: ₦", balance);
	}

	else{
	console.log("INVALID DEPOSIT AMOUNT!!!")
	};
	return balance;
};

function withdraw(balance, amount){
let maximumWithdrawalAmount = balance * 0.9;

	if(balance>100){
		if(amount<=maximumWithdrawalAmount && amount <=20_000){
			if(amount%500==0 || amount%1000==0){
				balance = balance - amount;
				balance = balance - 100;
				console.log("AMOUNT WITHDRAWN: ₦", amount)
				console.log("WITHDRAWAL FEES: ₦100")
				console.log("Your balance is: ₦", balance);
				return balance;	
			}
			else{
				console.log("NOT A MULTIPLE OF ₦500 OR ₦1000")
			};
		}
		else{
			console.log("EXCEEDING WITHDRWABLE AMOUNT")
		};	
	}
	
	else{
		console.log("INSUFFICIENT FUNDS")
	};

};