var Vertex = require('./vertex');

var ALGraph = (function(){
  function ALGraph() {
    this.vertices = [];
    this.al = {};     //its a dictionary
  }

  ALGraph.prototype.getSize = function(){
    return this.vertices.length;
  }

  //there will be no duplicated vals in the graph
  ALGraph.prototype.addVertex = function(val){
    if(this.getVertexID(val) != false){
      console.log("The value already exist in the graph");
      return null;
    }
    var v = new Vertex(this.getSize() + 1, val);
    this.vertices.push(val);
    this.al[val] = [];  //initialize the dictionary
  }

  ALGraph.prototype.getVertexID = function(val){
    for(let i = 0; i < this.vertices.length; i++)
      if(this.vertices[i] == val) return i; //return the ID
    return false;   //not found
  }

  ALGraph.prototype.getVertexValue = function(vertID){
    if(vertID < 0 || vertID >= this.vertices.length){
      console.log("Invalid vertex ID");
      return null;
    }
    return this.vertices[vertID];
  }

  //this is a directional edge
  ALGraph.prototype.addEdge = function(star, end){
    this.al[star].push(end);
  }

  //display graph's adjacency list
  ALGraph.prototype.displayAL = function(){
    for(var i = 0; i < this.vertices.length; i++){
      console.log(this.vertices[i]);
      console.log(this.al[this.vertices[i]]);
    }
  }

  ALGraph.prototype.neighbors = function(val){
    return this.al[val];
  }

  //use DFS to find whether this path exist
  ALGraph.prototype.vertexIsSearchable = function(star,end,visited){
    if(star == end) return true;
    visited[star]=1;   //use visited as an dictionary
    var nbs = this.neighbors(star);
    var TF = false;

    for(let v in nbs){
      if(visited[nbs[v]]==1)  continue;
      TF = this.vertexIsSearchable(nbs[v],end,visited);
      if(TF){
        return true;  //if any of the nighbor is reachable, return true
      }
    }
    return false;
  }

  return ALGraph;
})();
module.exports = ALGraph;
