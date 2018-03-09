let arr = [-90, -19, 0, 2, 12, 29, 33, 190, 320];

function rBS(arr, num, start, end){
	if(start > end)	return false;
	let index = Math.floor((start+end)/2);

	if(arr[index] == num)	return index;
	else{
		if(num < arr[index])	return rBS(arr,num,start,index-1);
		else	return rBS(arr,num,index+1,end);
	}
}

console.log(rBS(arr,5,0,arr.length-1));
console.log(rBS(arr,12,0,arr.length-1));
console.log(rBS(arr,0,0,arr.length-1));
console.log(rBS(arr,190,0,arr.length-1));
