let X = [23, 8, 4, 16, 62, 15, -3, -5, -5];

function Selection(arr){
	for(let i = 0; i < arr.length; i++){
		var min_index = i;
		var temp;
		for(let j=i+1; j< arr.length; j++)
			if(arr[min_index] >= arr[j])
				min_index = j;

		temp = arr[min_index];
		arr[min_index] = arr[i];
		arr[i] = temp;
	}
	return arr;
}

console.log(Selection(X));
