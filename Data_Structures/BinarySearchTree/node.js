var Node = (function(){

  function Node(data, left, right) {
    this.data = data;			//data in the node
    this.left = left;			//left child
    this.right = right;			//right child
  }

  Node.prototype.show = function() {
    return this.data;
  }

  return Node;
})();

module.exports = Node;
