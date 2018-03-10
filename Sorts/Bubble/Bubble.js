let X = [3, 6, 0, -2, -5];

function BubbleSort(arr){
	var temp;
	for(let i = 0; i < arr.length; i++)
		for(let j = 0; i < arr.length - 1- j; j++)
			if(arr[j] > arr[j+1]){
				temp = arr[j+1];
				arr[j+1] = arr[j];
				arr[j] = temp;
			}

	return arr;
}

console.log(BubbleSort(X));

