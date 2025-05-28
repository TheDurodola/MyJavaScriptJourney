let array = [2,4,3,5,3,6];


//Traditional for loop
for(index = 0;index<array.length;index++){
console.log(index)
}
console.log("")

//for/of loop
for(let number of array){
console.log(number)
}
console.log("")

//for/in loop
for(let index in array){
console.log(array[index])
}



//function declaration
function greet(){
console.log("hello")
};

//function expression
const greet = function(){
	let reply = "hello"
	return reply
}


