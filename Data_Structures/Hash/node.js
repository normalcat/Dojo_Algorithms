var Node = (function(){

  function Node(data) {
    this.data = data;
    this.next = null;
  }

  Node.prototype.show = function() {
    return this.data;
  }

  return Node;
})();

module.exports = Node;
