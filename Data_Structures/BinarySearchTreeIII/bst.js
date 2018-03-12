var Node = require('./node');
var Queue = require('./queue');

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

  BST.prototype.delete = function(data){
    if(!this.root)  return null;  
    pt = this.root;
    pre = this.root;
    while(pt){
      if(data == pt.data){
        if(pt.left == null && pt.right == null){   //Case one: leaf node
          if(pre.left === pt) pre.left = null;
          else  pre.right = null;
          console.log("Case I");
        }

        if(pt.left && pt.right == null){           //Case two: one child
          if(pre.left === pt) pre.left = pt.left;
          else  pre.right = pt.left;
          console.log("Case II, only left");
        }

        if(pt.right && pt.left == null){           //Case two: one child
          if(pre.lef === pt)  pre.left = pt.right;
          else  pre.right = pt.right;
          console.log("Case II, only right");
        }

        if(pt.left && pt.right){                   //Case Three: find the min in the right subtree
          console.log("Case III");
          pre_min_2nd = pt.right;
          try2 = pre_min_2nd.left
          while(try2){
            if(try2.left){                          //check first
              pre_min_2nd = try2;
              try2 = try2.left;
            }else  break;
          }
          this.root.data = try2.data;
          if(try2.right)  pre_min_2nd.left = try2.right;
          else  pre_min_2nd.left = null;
          break;
        }
      }
      if(data < pt.data){
        pre = pt;
        pt = pt.left;
      }
      if(data < pt.data){
        pre = pt;
        pt = pt.right;
      }                        
    }
  }

  BST.prototype.levelOrder = function(){    //need to use queue
    if(!this.root)  return null;
    var queue = new Queue();
    var pt = this.root;
    var value = pt.data
    queue.enqueue(value);
    while(queue.back){
      value = queue.dequeue();
      console.log(value);
      pt = this.find(value);
      if(pt.left) queue.enqueue(pt.left.data);
      if(pt.right)  queue.enqueue(pt.right.data);
    }
  }


  return BST;
})();

module.exports = BST;
