var stringarray = function() {
	var num = parseInt(prompt("Enter integer: "));
	var strarr = [];
	for (var i = 0; i < num; i++) {
		var str = prompt("Enter strings: ");
		strarr.push(str);
	}
	return strarr;
}

var strarr = stringarray();
var find = stringarray();

for (var i = 0; i < find.length; i++) {
	var total = 0
	var found = strarr.indexOf(find[i]);
	while (found != -1) {
		total++;
		found = strarr.indexOf(find[i], found + 1);
	}
	console.log(total);
}

