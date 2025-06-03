const input = require("prompt-sync");
const prompt = input();


const account = {
balance: 0
};

const transactions = {

};

let loop_condition = 0
while(loop_condition!=1){
console.log("\t\tBANK ATM SIMULATION\n\n1.Deposit\n2.Withdrawal\n3.View Transactions\n0.Exit\n");
let mainMenuNavigator = Number(prompt("Enter your choice: "))

if(mainMenuNavigator == 1){
amountDeposited = Number(prompt("Enter the amount: "));
deposit(account,amountDeposited)
}
if(mainMenuNavigator == 2){
amountWithdrawn = Number(prompt("Enter the amount: "));
withdraw(account,amountWithdrawn)
}
if(mainMenuNavigator == 3){
loop_condition = 1
}
if(mainMenuNavigator == 0){loop_condition = 1}


}




function deposit(account, amount){
	if(amount>0){
		account.balance = account.balance + amount;
		return account;
	}

	else{
	console.log("INVALID DEPOSIT AMOUNT!!!")
	};

};

function withdraw(account, amount){
let maximumWithdrawalAmount = account.balance * 0.9;

	if(account.balance>100){
		if(amount<=maximumWithdrawalAmount && amount <=20_000){
			if(amount%500==0 || amount%1000==0){
				account.balance = account.balance - amount;
				account.balance = account.balance - 100;
				console.log("AMOUNT WITHDRAWN", amount)
				console.log("WITHDRAWAL FEES: 100")
				console.log("Your balance is: ", account.balance);
				return account;	
			}
			else{
				console.log("NOT A MULTIPLE OF 500 OR 1000")
			};
		}
		else{
			console.log("INVALID")
		};	
	}
	
	else{
		console.log("INSUFFICIENT FUNDS")
	};

};