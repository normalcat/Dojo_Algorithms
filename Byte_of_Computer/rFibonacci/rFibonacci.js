function rFibonacci(num){
	if(!Number.isInteger(num) || num < 0)
		return "Please input a positive integer"

	if(num <=1 )	return num;
	return rFibonacci(num-1) + rFibonacci(num-2);
}


console.log(rFibonacci(6));
console.log(rFibonacci("23423"));
console.log(rFibonacci(1));
