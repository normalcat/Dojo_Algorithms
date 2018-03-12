var BinarySearchTree = require('./bst');

var bst = new BinarySearchTree();
bst.insert(23);
bst.insert(45);
bst.insert(16);
bst.insert(37);
bst.insert(3);
bst.insert(99);
bst.insert(22);
bst.insert(38);
bst.insert(2);

console.log("\n\nIn Order");
bst.inOrder(bst.root);
console.log("\n\nLevel Order");
bst.levelOrder(bst.root);
console.log("\n\nFind node with data 23");
console.log(bst.find(23).data);
bst.delete(23);
console.log("\n\nLevel Order");
bst.levelOrder(bst.root);
