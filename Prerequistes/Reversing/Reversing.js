let X = [-3, 5, 1, 3, 2, 10, 11];

function Reversing(arr){
	var temp;

	for(i=0; i<arr.length/2; i++){
		temp = arr[arr.length - 1 -i];
		arr[arr.length - 1 -i] = arr[i];
		arr[i] = temp;
	}
	return X;
}

console.log(X);
console.log(Reversing(X));
