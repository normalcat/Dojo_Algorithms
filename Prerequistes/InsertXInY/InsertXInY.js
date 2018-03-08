let A = [1,3,5,7];

function InsertXInY(arr, num, index){
	if(!Number.isInteger(index) || index < 0)
		return "Y should be a posative integer";
	for(let i=arr.length; i > index; i--)
		arr[i]=arr[i-1];
	arr[index] = num;
	return arr;
}

console.log(InsertXInY(A, 10, 2));
console.log(InsertXInY(A, -4, 7));
console.log(InsertXInY(A, 10, -1));
