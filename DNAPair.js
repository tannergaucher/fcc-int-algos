function pairElement(str) {
	var data = [
		{ letter: "G", pair: ["G", "C"] },
		{ letter: "C", pair: ["C", "G"] },
		{ letter: "A", pair: ["A", "T"] },
		{ letter: "T", pair: ["T", "A"] }
	];

	var newArr = [];
	var answer = [];

	newArr = str.split("");

	//for each in new arr, find match in data
	newArr.forEach(function(letter) {
		var match = data.find(function(data) {
			return data.letter === letter;
		});

		answer.push(match.pair);
	});

	//console.log(answer);
	return answer;
}

pairElement("ATTAGCG");
