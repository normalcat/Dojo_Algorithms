let X = [1, 5, 10, -2];
let Y = [];

function MinMaxAve(arr){
	var results = [null, null, null];		//min, max, ave

	for(let i=0; i<arr.length;i++){
		if(results[0]==null || arr[i] < results[0])	results[0]=arr[i];
		if(results[1]==null || arr[i] > results[1])	results[1]=arr[i];
		if(results[2]==null)	results[2]=arr[i];
		else	results[2]+=arr[i];
	}
	results[2]/=arr.length;

	return results;
}

console.log(MinMaxAve(X));
console.log(MinMaxAve(Y));
