let X = [2,3,5,7,6];

function Swap(arr){
	var temp = arr[arr.length-1];
	arr[arr.length-1] = arr[0];
	arr[0] = temp;
	return arr;
}

console.log(X);
console.log(Swap(X));
