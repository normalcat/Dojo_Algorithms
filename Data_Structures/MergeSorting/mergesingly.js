var SinglyLinkedList = require('./singly');

var sll = new SinglyLinkedList();
sll.insert(6, "head");
sll.insert(5, 6);
sll.insert(3, 5);
sll.insert(1, 3);
sll.insert(8, 1);
sll.insert(7, 8);
sll.insert(2, 7);
sll.insert(4, 2);

function mergeSortLinkedList(sll) {
	if(sll.nodeCount() <= 1)	return sll;
	var left = new SinglyLinkedList();
	var right = new SinglyLinkedList();
	var x = Math.floor(sll.nodeCount()/2);
	
	var current_left = left.head;
	var current_right = right.head;
	var current_sll = sll.head.next;

	while(current_sll){
		if(x){	
			left.insert(current_sll.element,current_left.element);
			current_left = current_left.next;
		}else{
			right.insert(current_sll.element,current_right.element);
			current_right = current_right.next;
		}
		current_sll = current_sll.next;
		x--;
	}
	return mergeLinkedLists(mergeSortLinkedList(left),mergeSortLinkedList(right));
}

function mergeLinkedLists(left, right) {
	var merged = new SinglyLinkedList();
	var merged_ptr = merged.head;

	while(1){
		if(left.nodeCount() == 0 && right.nodeCount() == 0)
			return merged;

		if(left.nodeCount() == 0){
			merged.insert(right.head.next.element,merged_ptr.element);
			right.remove(right.head.next.element);
			merged_ptr = merged_ptr.next;
			continue;
		}
		if(right.nodeCount() == 0){
			merged.insert(left.head.next.element,merged_ptr.element);
			left.remove(left.head.next.element);
			merged_ptr = merged_ptr.next;
			continue;
		}

		if(left.head.next.element <= right.head.next.element){
			merged.insert(left.head.next.element,merged_ptr.element);
			left.remove(left.head.next.element);
		}else{
			merged.insert(right.head.next.element,merged_ptr.element);
			right.remove(right.head.next.element);
		}
		merged_ptr = merged_ptr.next;
	}
}

var answer = mergeSortLinkedList(sll);
answer.display();
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8


