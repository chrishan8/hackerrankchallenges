// var node3 = {data:5, next: null};
// var node2 = {data:4, next: node3};
// var node1 = {data:1, next: node2};
// var head = {data:2, next: node1};

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

list1 = new List();
for (var i = 0; i < 5; i++) {
	list1.addList(i);
}

console.log(list1);

var currentnode = list1.start;
while (currentnode.next != null) {
	console.log(currentnode.data);
	currentnode = currentnode.next;
}
console.log(currentnode.data);