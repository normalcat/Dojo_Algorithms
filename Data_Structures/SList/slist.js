var Node = require('./node');

var SList = (function(){
	function SList(){
		newNode = new Node("head");
		this.head = newNode;
		this.next = null;
	}

	SList.prototype.find = function(element){
		ptr = this.head;
		while(ptr){
			if(ptr.data == element)	return ptr;
			else	ptr=ptr.next;
		}
		return null;
	}

	SList.prototype.findPrevious = function(element){
		previous = this.head;
		ptr = this.head.next;

		while(ptr){
			if(ptr.data == element)	return previous;
			previous = previous.next;
			ptr = ptr.next;
		}
		return null;
	}

	SList.prototype.insert = function(newElement, element){
		newNode = new Node(newElement);
		ptr = this.find(element);
		if(ptr){
			newNode.next = ptr.next;
			ptr.next = newNode;
		}
	}

	SList.prototype.remove = function(element){
		ptr = this.findPrevious(element);
		ptr.next = ptr.next.next;
	}

	SList.prototype.display = function(){
		if(!this.head.next)	console.log("This SList is empty");
		ptr = this.head.next;
		while(ptr){
			console.log(ptr.data);
			ptr = ptr.next;
		}
	}

	return SList;
})();

module.exports = SList;
