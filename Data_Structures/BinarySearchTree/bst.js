var Node = require('./node');

var BST = (function(){
  function BST() {
    this.root = null;
  };

  BST.prototype.insert = function(data) {
    newNode = new Node(data, null, null);
    if(!this.root){
      this.root = newNode;
    }else{
      pt = this.root;
      while(pt){
        if(data >= pt.data){
          if(!pt.right){
            pt.right = newNode;
            return ;
          }else pt = pt.right;
        }else{
          if(!pt.left){
            pt.left = newNode;
            return ;
          }else pt = pt.left;
        }
      }
    }
  };

  BST.prototype.inOrder = function(node) {
    if(!node) return;
    BST.prototype.inOrder(node.left);
    console.log(node.data);
    BST.prototype.inOrder(node.right);
  };

  BST.prototype.preOrder = function(node) {
    if(!node) return;
    console.log(node.data);
    BST.prototype.preOrder(node.left);
    BST.prototype.preOrder(node.right);
  };

  BST.prototype.postOrder = function(node) {
    if(!node) return;
    BST.prototype.preOrder(node.left);
    BST.prototype.preOrder(node.right);
    console.log(node.data);
  };


  return BST;
})();

module.exports = BST;
