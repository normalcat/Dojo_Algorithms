// main.js
var Stack = require('./stack')
var stack = new Stack();
stack.push("Bulbasaur");
stack.push("Charmander");
stack.push("Squirtle");
stack.display();
console.log("Taking out Squirtle");
stack.pop();
stack.display();
console.log("Adding Pikachu");
stack.push("Pikachu");
stack.display();
if(stack.isEmpty()){
	console.log("Is empty");
}else{
	console.log("Is not empty");
}


var Stack2 = new Stack();
if(Stack2.isEmpty()){
	console.log("Is empty");
}else{
	console.log("Is not empty");
}
Stack2.pop();
Stack2.push(1);
Stack2.push(2);
Stack2.display();
if(Stack2.contains(2)){
	console.log("It contains 2");
}else{
	console.log("It does not contains 2");
}
