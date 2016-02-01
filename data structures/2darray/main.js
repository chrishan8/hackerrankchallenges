var formgrid = function() {
	var grid = [];
	for (var i = 1; i <= 6; i++) {
		var row = prompt("Enter row #" + (i));
		var strrow = row.split(" ");
		var introw = [];
		for (var j = 0; j <= 5; j++) {
			introw.push(parseInt(strrow[j]));
		}
		grid.push(introw);
	}
	console.log(grid);
	return grid;
}

var hourglass = function(grid) {
	var total = 0;
	for (var k = 0; k <= 3; k++) {
		for (var i = 0; i <= 3; i++) {
			var nexttotal = grid[i+1][k+1];
			for (var j = 0; j <= 2; j++) {
				nexttotal += grid[i][k+j];
				nexttotal += grid[i+2][k+j];
			}
			console.log(nexttotal);
			if (total < nexttotal) {
				total = nexttotal;
			}
		}
	}
	return total;
}

var x = formgrid();
var y = hourglass(x);
console.log(y);