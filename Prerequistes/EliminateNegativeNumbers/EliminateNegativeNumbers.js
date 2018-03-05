let X = [1, 5, 10, -2];

function EliminateNegativeNumbers(arr){
	for(let i = 0; i < arr.length; i++)
		if(arr[i] < 0)	arr[i] = 0;

	return arr;
}

console.log(EliminateNegativeNumbers(X));
