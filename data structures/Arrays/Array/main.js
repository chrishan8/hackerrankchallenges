var y = function(num, array) {
	var reverse = [];
	var splitarray = array.split(" ");
	for (var i = num - 1; i >= 0; i--) {
		reverse.push(splitarray[i]);
	}
	return reverse;
}

var num = prompt("N?: ");
var arr = prompt("Enter integers: ");
console.log(y(num, arr));