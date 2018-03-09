let arr = [-90, -19, 0, 2, 12, 29, 33, 190, 320];

function iBS(arr, num){
	var lower = 0, upper = arr.length - 1, index;

	while(1){
		if(lower > upper)	return false;

		index = Math.floor((lower+upper)/2);
		if(arr[index] == num)	return index;
		else{
			if(num < arr[index])
				upper = index - 1;
			else	lower = index+1;
		}
	}
}

console.log(iBS(arr,5));
console.log(iBS(arr,12));
console.log(iBS(arr,0));
console.log(iBS(arr,190));
