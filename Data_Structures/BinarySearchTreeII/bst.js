var Node = require('./node');

var BST = (function(){
  function BST() {
    this.root = null;
  };

  BST.prototype.insert = function(data) {
    var node = new Node(data, null, null);
    if(this.root === null) {
      this.root = node;
    } else {
      var current = this.root;
      while (true) {
        var ancestor = current;
        if (data < current.data) {
          current = current.left;
          if (current === null) {
            ancestor.left = node;
            break;
          }
        } else {
          current = current.right;
          if (current === null) {
            ancestor.right = node;
            break;
          }
        }
      }
    }
  };

  BST.prototype.inOrder = function(node) {
    if (node === null) {
      return;
    } else {
      this.inOrder(node.left);
      console.log(node.show() + " ");
      this.inOrder(node.right);
    }
  };

  BST.prototype.preOrder = function(node) {
    if (node === null) {
      return;
    } else {
      console.log(node.show() + " ");
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  };

  BST.prototype.postOrder = function(node) {
    if (node === null) {
      return;
    } else {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.show() + " ");
    }
  };

  BST.prototype.getMin = function() {
    if(!this.root)  return null;
    var pt = this.root;
    while(pt){
      if(pt.left) pt=pt.left;
      else  return pt.data;
    }
  }

  BST.prototype.getMax = function() {
    if(!this.root)  return null;
    var pt = this.root;
    while(pt){
      if(pt.right)  pt=pt.right;
      else  return pt.data;
    }
  }

  BST.prototype.find = function(data) {
    if(!this.root)  return null;
    var pt = this.root;
    while(pt){
      if(data == pt.data) return pt;
      if(data < pt.data)  pt = pt.left;
      if(data > pt.data)  pt = pt.right;
    }
    return pt;
  }


  return BST;
})();

module.exports = BST;
