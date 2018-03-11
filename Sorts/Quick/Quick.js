let X = [23, 80, 40, 16, 62, 15, -3, -5, -5];

function QuickSort(arr){
	var left = [];
	var right = [];

	if(arr.length <= 1)	return arr;

	for(let i=1; i<arr.length; i++)
		if(arr[i]<=arr[0])	left.push(arr[i]);
		else	right.push(arr[i]);

	return (QuickSort(left).concat(arr[0]).concat(QuickSort(right))); 
}

console.log(QuickSort(X));
