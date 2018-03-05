function rFactorial(num){
	if(!Number.isInteger(num) || num <= 0)
		return "Please input a positive integer";
	if(num == 1)	return 1;

	return num * rFactorial(num - 1);
}

console.log(rFactorial(5));
console.log(rFactorial(1));
console.log(rFactorial("wewew"));
