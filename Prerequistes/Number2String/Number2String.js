let X = [-1, -3, 2];

function Number2String(arr){
	for(let i=0; i<arr.length;i++)
		if(arr[i]<0)	arr[i] = "Dojo";

	return arr;
}

console.log(Number2String(X));
