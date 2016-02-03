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
for (var i = 0; i <= testcase.length; i++) {
	list1.addList(testcase[i]);
}
var input = parseInt(prompt("Enter data for new node: "));
var position = parseInt(prompt("Enter position: "));
var currentnode = list1.start;
console.log(currentnode.data);
if (isNaN(currentnode.data)) {
	currentnode.data = input;
}
else {
	for (var i = 0; i < position - 1; i++) {
		currentnode = currentnode.next
	}
	var newnode = list1.makeNode();
	newnode.data = input;
	newnode.next = currentnode.next;
	currentnode.next = newnode;
	console.log("EXECUTED");
}

console.log(list1);