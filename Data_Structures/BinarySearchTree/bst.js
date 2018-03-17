var Node = require('./node');

var BST = (function(){
  function BST() {          //constructor
    this.root = null;
  };

  BST.prototype.insert = function(data) {
    newNode = new Node(data, null, null); //create a new node
    if(!this.root){         //if this tree is empty
      this.root = newNode;  //the root is the new node
    }else{
      pt = this.root;
      while(pt){
        if(data >= pt.data){//>= go to the right
          if(!pt.right){    //if there is no right
            pt.right = newNode; //insert new node here
            return ;
          }else pt = pt.right;  //go to the right child
        }else{              //if < check the left
          if(!pt.left){     //if no left child
            pt.left = newNode;  //insert new node here
            return ;
          }else pt = pt.left;   //go to the left child
        }
      }
    }
  };

  BST.prototype.inOrder = function(node) {
    if(!node) return;                 //if null, return
    BST.prototype.inOrder(node.left); //print left first
    console.log(node.data);           //print itself 2nd
    BST.prototype.inOrder(node.right);//print right the last
  };

  BST.prototype.preOrder = function(node) {
    if(!node) return;                 //if null, return
    console.log(node.data);           //print itself first
    BST.prototype.preOrder(node.left);//print left 2nd
    BST.prototype.preOrder(node.right);//print right the last
  };

  BST.prototype.postOrder = function(node) {
    if(!node) return;                 //if null, return
    BST.prototype.preOrder(node.left);//print left first
    BST.prototype.preOrder(node.right);//print right 2nd
    console.log(node.data);           //print itself the last
  };


  return BST;
})();

module.exports = BST;
