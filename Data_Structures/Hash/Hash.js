var Node = require('./node');

function HashTable() {
  // given fixed size of array of 26 slots
  this.table = new Array(26);
}
HashTable.prototype.buildLinks = function() {
  // set an empty array for all indexes in this.table
  for(let i=0;i<26;i++)
    this.table[i] = new Node(null);
}
HashTable.prototype.linkBuilt = function() {
  // determines if links have been built yet
  if(!this.table[0])  return false;
  return true;
}
HashTable.prototype.simpleHash = function(data) {
  // determines the hash value given data
  // how can we use the ASCII values to find appropriate data (use charCodeAt())
  return data.toLowerCase().charCodeAt(0) - 97;
  //use only lower case, and minus 97 to start as 0 
}
HashTable.prototype.betterHash = function(data) {
  // how can we write a better Hash using ASCII values?
  var temp=0;
  for(let i=0; i<data.length;i++)
    temp+= (data.toLowerCase().charCodeAt(i) - 97);
  return temp%26;
}
HashTable.prototype.simplePut = function(data) {
  // place data in appropriate place by using simpleHash
  //if collision, move to the next avaliable one
  var index = this.simpleHash(data);
  if(!this.table[index]) this.table[index] = data;
  else{
    temp = 26;
    while(temp){
      index=(index+1)%26;
      if(!this.table[index]){
        this.table[index] = data;
        break;
      }
      temp--;
    }
    if(!temp) //if try 26 times and still don't have space... means full
      console.log("The hash table is full");
  }
}
HashTable.prototype.linkPut = function(data) {
  // build links if not built yet and place data in the right place
  var index = this.betterHash(data);
  if(!this.linkBuilt())
    this.buildLinks();

  if(this.table[index].data == null)
    this.table[index].data = data;
  else{
    newNode = new Node(data);
    newNode.next = this.table[index].next;    //add the newNode at the beginig
    this.table[index].next = newNode;
    console.log(this.table[index].data + " " + newNode.data);
  }
  console.log(data + " " + index.toString());
}
HashTable.prototype.showDistribution = function() {
  // shows distribution of hash table
  for(var i = 0; i < this.table.length; i++)     
    console.log(this.table[i]);
}

HashTable.prototype.showDistributionLink = function() {
  // shows distribution of hash table
  for(var i = 0; i < this.table.length; i++){    
    console.log(this.table[i].data);
    if(this.table[i].next!=null){
      pt = this.table[i].next;
      while(pt){
        console.log("--" + pt.data);  //print out the link
        pt = pt.next;
      }
    }
  }
}

var names = ["Tony", "Tori", "Kate", "Kyle", "Thomas", "Dale",
             "David", "Daisy", "Andy", "Albert", "Dane", "Shane", "Lane",
             "Janet", "Katelyn", "Janet", "Vivian", "Joe"];
var simpleHashTable = new HashTable();
for(var i = 0; i < names.length; i++)
  simpleHashTable.simplePut(names[i]);
simpleHashTable.showDistribution();
console.log("===========");

var betterHashTable = new HashTable();
for(var i = 0; i < names.length; i++)
  betterHashTable.linkPut(names[i]);
betterHashTable.showDistributionLink();
