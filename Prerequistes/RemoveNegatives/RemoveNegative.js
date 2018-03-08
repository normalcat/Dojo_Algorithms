let X = [0, -1, 2, -3, 4, -5, 6];

function RemoeNegatives(arr){
	var i,j,temp;

	for(i=0; i<arr.length; i++){
		if(arr[i] < 0){
			temp = arr[i];
			for(j=i + 1; j < arr.length;j++){
				if(arr[j] >= 0){			//swap
					arr[i] = arr[j];
					arr[j] = temp;
					break;
				}
			}
		}
	}

	for(i = arr.length - 1; i >=0 ; i--)
		if(arr[i] < 0)	arr.pop();

	return arr;
}

console.log(RemoeNegatives(X));
