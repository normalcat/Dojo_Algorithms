function RandomArray(){
	var X = [];

	for(let i=0; i < 10; i++)
		X.push(Math.floor(Math.random()*100)+1);

	return X;
}

console.log(RandomArray());
