function iFacatorial(num){
	var sum = 1;
	if(!Number.isInteger(num) || num <= 0)
		return "Please input a positive integer";
	for(let i=num; i>=1; i--)
		sum *= i;
	return sum;
}

console.log(iFacatorial(5));
console.log(iFacatorial("23r23r"));
