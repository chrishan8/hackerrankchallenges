var List = function() {
	this.start = null;
	this.end = null;
}

List.prototype.makeNode = function() {
	return {data: null, next: null};
}

List.prototype.addList = function(data) {
	if (this.start === null) {
   		this.start = this.makeNode();
   		this.end = this.start;
   	}
   	else {
  		this.end.next = this.makeNode();
  		this.end = this.end.next;
 	}
 	this.end.data = data;
}

var testcase = prompt("Enter test case (int): ").split(" ").map(function(x) {
	return parseInt(x);
});
list1 = new List();
for (var i = 0; i < 5; i++) {
	list1.addList(testcase[i]);
}

var input = parseInt(prompt("Enter integer to insert as head: "));
var head = list1.makeNode();
head.data = input;
head.next = list1.start;
console.log(head);