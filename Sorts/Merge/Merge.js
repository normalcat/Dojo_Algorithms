let X = [23, 8, 4, 16, 62, 15, -3, -5, -5];
let Y = [3, 2, 1];

function Merge(arr1, arr2){
	var i=0,j=0,new_arr = [];
	while(1){
		if(arr1[i] <= arr2[j]){
			new_arr.push(arr1[i]);
			i+=1;
		}else{
			new_arr.push(arr2[j]);
			j+=1;
		}
		if(i == arr1.length){
			for(;j<arr2.length;j++)
				new_arr.push(arr2[j]);
			break;
		}
		if(j == arr2.length){
			for(;i<arr1.length;i++)
				new_arr.push(arr1[i]);
			break;
		}
	}
	return new_arr;
}

function MergeSort(arr){
	var index=Math.floor(arr.length/2);
	if(arr.length == 1)	return arr;				//slice function is [..., ....)
	return Merge(MergeSort(arr.slice(0,index)),MergeSort(arr.slice(index,arr.length)));
}

console.log(MergeSort(Y));
console.log(MergeSort(X));