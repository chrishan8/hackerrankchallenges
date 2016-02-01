// var testcasestr = prompt("Enter test case: ").split(" ");
// var testcasearr = []
// for (var i = 0; i < testcasestr.length; i++) {
// 	testcasearr.push(parseInt(testcasestr[i]));
// }
// var testcaselist = function(testcasearr) {
// 	for (var i = 0; i < testcasearr.length; i++) {
var node3 = {data:5, next: null};
var node2 = {data:4, next: node3};
var node1 = {data:1, next: node2};
var head = {data:2, next: node1};

var currentnode = head;
while (currentnode.next != null) {
	console.log(currentnode.data);
	currentnode = currentnode.next;
}