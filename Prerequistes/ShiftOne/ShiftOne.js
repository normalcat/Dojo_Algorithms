let X = [1,5,10,7,-2];

function ShiftOne(arr){
	var i;
	for(i = 0; i < arr.length; i++)
		arr[i] = arr[i+1];
	arr[i - 1] = 0
	return arr;
}

console.log(ShiftOne(X));
