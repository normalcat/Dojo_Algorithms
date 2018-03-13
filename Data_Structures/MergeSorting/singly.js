var Node = require('./node.js');

var SinglyLinkedList = (function() {
  function SinglyLinkedList() {
    // linked list has a dummy first element
    this.head = new Node('head');
  }

  SinglyLinkedList.prototype.find = function(element) {
    var currentNode = this.head;
    while(currentNode !== null && currentNode.element !== element) { 
      currentNode = currentNode.next;
    }
    return currentNode;
  };

  SinglyLinkedList.prototype.insert = function (newElement, element) {
    var newNode = new Node(newElement);
    var current = this.find(element);
    newNode.next = current.next;
    current.next = newNode;
  };

  SinglyLinkedList.prototype.display = function() {
    var currentNode = this.head;
    while(currentNode.next !== null) {
      console.log(currentNode.next.element);
      currentNode = currentNode.next;
    }
  };

  SinglyLinkedList.prototype.findPrevious = function(element) {
    var currentNode = this.head;
    while(currentNode.next != null && currentNode.next.element != element) {
      currentNode = currentNode.next;
    }
    return currentNode;
  };

  SinglyLinkedList.prototype.remove = function(element) {
    var previousNode = this.findPrevious(element);
    if(previousNode.next != null) {
      previousNode.next = previousNode.next.next;
    }
  };

  SinglyLinkedList.prototype.nodeCount = function() {
    // not including the dummy first element (head)
    var currentNode = this.head;
    var count = 0;
    while(currentNode.next !== null) {
      currentNode = currentNode.next;
      count++;
    }
    return count;
  }

  SinglyLinkedList.prototype.display = function(){
    if(!this.head.next) console.log("This SList is empty");
    ptr = this.head.next;
    while(ptr){
      console.log(ptr.element);
      ptr = ptr.next;
    }
  }

  return SinglyLinkedList;
})();

module.exports = SinglyLinkedList;

