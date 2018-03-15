function Node(chr, value) { 
  this.chr = chr;
  this.value = value;
  this.next = [];
}
function Trie() {
  this.root = new Node("A", null);
}
Trie.prototype.insert = function(word, value) {
	pt = this.root;
	if(pt.chr!=word[0])	return null;	//it should all be starting "A"

	for(let i=1; i<word.length-1;i++){
		if(pt.next.chr == word[i]){
			for(let j=0; j<pt.next.length;j++)
				if(pt.next[j].char == word[i+1])
					pt = pt.next[j];
		}else pt.next.push(Node(word[i],null))
	}
	pt.next.push(Node(word(word[i],value)));
  // your code here
}
Trie.prototype.get = function(word) {
  // your code here (outputs value of word)
}
var trie = new Trie(); 
trie.insert("ANDREW", "awesome"); 
trie.insert("ANDY", "amazing"); 
trie.insert("ANT", "what");
console.log(trie.get("ANDY")); 
console.log(trie.get("ANDREW")); 
console.log(trie.get("ANT"));
