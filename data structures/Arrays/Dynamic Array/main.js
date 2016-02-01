var ithseq = function(query, lastans) {
	// defines the ith sequence
	return query[1] ^ lastans;
}

var query1 = function(query, sequences, lastans) {
	sequences[ithseq(query, lastans)].push(query[2]);
	return sequences;
}

var query2 = function(query, sequences, lastans) {
	console.log(sequences[ithseq(query,lastans)][query[2]%sequences[ithseq(query,lastans)].length]);
	return lastans = sequences[ithseq(query,lastans)].length;
}

var intinputarr = function(str) {
	var strarr = str.split(" ");
	var input = [];
	for (var i = 0; i <= strarr.length; i++) {
		input.push(parseInt(strarr[i]));
	}
	return input;
}

// query is retrieved and stored as an array
var lastans = 0;
var strinput = prompt("Enter N, Q: ");
var input = intinputarr(strinput);
// create N empty sequences
var sequences = [];
for (var j = 0; j < input[0]; j++) {
	var emptyseq = [];
	sequences.push(emptyseq);
}
// applies the query
for (var k = 0; k < input[1]; k++) {
	var strquery = prompt("Enter query: ");
	var query = intinputarr(strquery);
	if (query[0] === 1) {
		sequences = query1(query, sequences, lastans);
	}
	if (query[0] === 2) {
		lastans = query2(query, sequences, lastans);
	}
}
