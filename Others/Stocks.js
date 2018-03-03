let X1 = [2, 3];
let X2 = [11, 3, 1, 8, 10, 2, 20];
let X3 = [10,7,4,3,1];

function findInterval(arr){
	var result = [-1, -1];	//but, sell index
	var temp_min_index;
	var i;

	if(arr.length < 2){
		console.log("Do not have enough data points");
		return result;
	}
	for(i = 1; i<arr.length; i++){
		if(arr[i] - arr[i-1] > 0)	break;	//trying to find the first turnning point
	}

	if(i==arr.length){		//always decline
		return result;		//no reulsts are found
	}

	result[0]=i-1;
	result[1]=i;
	temp_min_index = i-1;

	for(i=i+1;i<arr.length;i++){
		if(arr[i] < arr[result[0]]){
			temp_min_index = i;		//if it is smaller, keep the info
		}
		if(arr[i] >= arr[result[1]]){
			result[0] = temp_min_index;
			result[1] = i;
		}
	}
	return result;
}


console.log(findInterval(X1));
console.log(findInterval(X2));
console.log(findInterval(X3));

