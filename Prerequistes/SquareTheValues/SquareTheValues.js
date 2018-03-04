let X = [1, 5, 10, -2];

function SquareTheValues(arr){
	for(let i = 0; i < X.length; i++)
		X[i] = X[i] * X[i];
	return arr;
}

console.log(SquareTheValues(X));
