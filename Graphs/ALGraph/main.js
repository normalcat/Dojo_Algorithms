var ALGraph = require('./algraph');
var Graph = new ALGraph();

Graph.addVertex("A");
Graph.addVertex("B");
Graph.addVertex("C");
Graph.addVertex("D");
Graph.addVertex("E");
console.log(Graph.getSize());
Graph.addEdge("A","B");
Graph.addEdge("A","C");
Graph.addEdge("A","D");
Graph.addEdge("D","E");
Graph.addEdge("B","D");
Graph.addEdge("C","E");
Graph.addVertex("F");
Graph.displayAL();
if(Graph.getVertexID("A")){
	console.log("It already exists");
}else{
	console.log("Its new");
}
if(Graph.vertexIsSearchable("A","E",[])){
	console.log("Yes");
}else{
	console.log("No");
}

if(Graph.vertexIsSearchable("B","F",[])){
	console.log("Yes");
}else{
	console.log("No");
}