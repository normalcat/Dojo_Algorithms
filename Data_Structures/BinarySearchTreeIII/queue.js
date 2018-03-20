var Queue = (function(){
  function Queue() {        //constructor
    this.dataStore = [];    //empty array
    this.back = 0;          //default index
  }
  Queue.prototype.enqueue = function(item) {
    this.dataStore[this.back] = item;   //assign the item to the current index
    this.back++;                        //increment by one
  }
  Queue.prototype.dequeue = function() {
    var output = this.dataStore[0];     //always get the first one
    for(var i = 1; i < this.back; i++) {//move everything one element forward
      this.dataStore[i - 1] = this.dataStore[i];
    }
    this.back--;                        //decrease the current index
    return output;                      //return the value
  }
  Queue.prototype.display = function() {
    for(var i = 0; i < this.back; i++) {
      console.log(this.dataStore[i]);   //display the entire queue
    }
  }
  return Queue;
})();
module.exports = Queue;
