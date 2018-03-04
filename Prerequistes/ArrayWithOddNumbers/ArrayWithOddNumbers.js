function ArrayWithOddNumbers(){
	var Y = [];

	for(let i=1; i<=255; i++)
		if(i % 2 == 1)	Y.push(i);
	return Y;
}

console.log(ArrayWithOddNumbers());
