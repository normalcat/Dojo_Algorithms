function iFibonacci(num){
	var pre2 = [0, 1], sum;
	if(!Number.isInteger(num) || num < 0)
		return "Please input an integer > 0"

	if(num == 0)	return 0;
	if(num == 1)	return 1;

	for(let i = 2; i <= num; i++){
		sum = pre2[0] + pre2[1];
		pre2[0] = pre2[1];
		pre2[1] = sum;
	}
	return sum;
}

console.log(iFibonacci("wererew"));
console.log(iFibonacci(1));
console.log(iFibonacci(6));
