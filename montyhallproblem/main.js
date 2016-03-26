getRandomInt = function (min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}

getRandomBool = function(num) {
	if (num == 1) {
		return true;
	}
	else {
		return false;
	}
}

var min = 0;
var max = 2;

var iterations = 10000;

var correctone = 0;
var totalone = 0

var correcttwo = 0;
var totaltwo = 0;

for (var i = 0; i <= iterations; i++) {
	var doors = [];
	for (var j = 0; j < 3; j++) {
		var randbool = getRandomBool(getRandomInt(min, max));
		doors.push(randbool);
	}

	var choice = doors[getRandomInt(min, 3)];
	var index = doors.indexOf(false);
	if (index > -1) {
    	doors.splice(index, 1);
	}
	if (choice == true) {
		correctone++;
	}
	totalone++;
}

for (var i = 0; i <= iterations; i++) {
	var doors = [];
	for (var j = 0; j < 3; j++) {
		var randbool = getRandomBool(getRandomInt(min, max));
		doors.push(randbool);
	}

	var choice = doors[getRandomInt(min, 3)];
	var index = doors.indexOf(false);
	if (index > -1) {
    	doors.splice(index, 1);
	}
	if (doors.indexOf(choice) == 0) {
		choice = doors[1];
	}
	else {
		choice = doors[0];
	}
	if (choice == true) {
		correcttwo++;
	}
	totaltwo++;
}

console.log("Same Choice ---> " + correctone + "/" + totalone + " Correct");
console.log("Switch Choice ---> " + correcttwo + "/" + totaltwo + " Correct");