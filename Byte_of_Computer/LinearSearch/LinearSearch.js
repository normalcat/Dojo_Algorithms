var arr = [24, 8, 23, 3];

function linearSearch(target, arr){
	for(let i=0; i < arr.length; i++)
		if(target == arr[i])	return i;
	return false;
}

console.log(linearSearch(8, arr));
console.log(linearSearch(-99,arr));
