// stack.js
var Stack = (function(){
  function Stack() {
    this.dataStore = [];
    this.top = 0;
  }
  Stack.prototype.push = function(item) {
    this.dataStore[this.top] = item;
    this.top += 1;
  }
  Stack.prototype.pop = function() {
    if(this.isEmpty){
      console.log("Stack is empty. Nothing to pop");
      return null;
    }
    var index = this.top;
    this.top -=1;
    return this.dataStore[index];
  }
  Stack.prototype.display = function() {
    for(let i=0; i<this.top; i++)
      console.log(this.dataStore[i]);
  }
  Stack.prototype.isEmpty = function() {
    return !this.top;
  }
  Stack.prototype.size = function() {
    return this.top;
  }
  Stack.prototype.contains = function(item) {
    if(this.isEmpty()){
      return false;
    }
    for(let i=0; i<this.top; i++){
      if(item == this.dataStore[i]) return true;
    }
  }
  return Stack;
})();
module.exports = Stack;
