let X = [-3, 3, 7, 5];

var maxNumber = null;

if(X.length == 0){
	console.log("There is nothing in the array");
}

for(let i=0; i < X.length; i++){
	if(maxNumber == null){
		maxNumber = X[i];
	}else{
		if(X[i] > maxNumber)
			maxNumber = X[i];
	}
}

console.log(maxNumber);
