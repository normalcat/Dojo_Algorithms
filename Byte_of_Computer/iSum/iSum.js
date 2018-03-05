function iSum(num){
	var sum = 0;
	for(let i = 1; i<= num; i++)
		sum += i;
	return sum;
}

console.log(iSum(1));
console.log(iSum(5));
