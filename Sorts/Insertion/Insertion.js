let X = [23, 8, 4, 16, 62, 15, -3, -5, -5];

function Insertion(arr){
	for(let i=1; i<arr.length; i++){
		for(let j=i; j>=1; j--){
			var temp = arr[j];
			if(temp < arr[j-1]){
				arr[j] = arr[j-1];
				arr[j-1] = temp;
			}
		}
	}
	return arr;
}

console.log(Insertion(X));
