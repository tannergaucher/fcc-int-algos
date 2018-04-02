function pairElement(str) {
	var data = [
		{ letter: "G", pair: ["G", "C"] },
		{ letter: "C", pair: ["C", "G"] },
		{ letter: "A", pair: ["A", "T"] },
		{ letter: "T", pair: ["T", "A"] }
	];

	var newArr = [];
	var answer = [];

	//split str
	newArr = str.split("");

	//for eat in new arr, find match in map
	newArr.forEach(function(letter) {
		var match = data.find(function(data) {
			return data.letter === letter;
		});

		//console.log(match.pair);
		answer.push(match.pair);
	});

	//console.log(answer);
	return answer;
}

pairElement("ATTAGCG");
