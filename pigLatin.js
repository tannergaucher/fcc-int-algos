var data = [
	{ letter: "a", type: "vowel" },
	{ letter: "b", type: "consonant" },
	{ letter: "c", type: "consonant" },
	{ letter: "d", type: "consonant" },
	{ letter: "e", type: "vowel" },
	{ letter: "f", type: "consonant" },
	{ letter: "g", type: "consonant" },
	{ letter: "h", type: "consonant" },
	{ letter: "i", type: "vowel" },
	{ letter: "j", type: "consonant" },
	{ letter: "k", type: "consonant" },
	{ letter: "l", type: "consonant" },
	{ letter: "m", type: "consonant" },
	{ letter: "n", type: "consonant" },
	{ letter: "o", type: "vowel" },
	{ letter: "p", type: "consonant" },
	{ letter: "q", type: "consonant" },
	{ letter: "r", type: "consonant" },
	{ letter: "s", type: "consonant" },
	{ letter: "t", type: "consonant" },
	{ letter: "u", type: "vowel" },
	{ letter: "v", type: "consonant" },
	{ letter: "w", type: "consonant" },
	{ letter: "x", type: "consonant" },
	{ letter: "y", type: "consonant" },
	{ letter: "z", type: "consonant" }
];

var cEnd = "ay";
var vEnd = "way";
var typeArray = [];

function translatePigLatin(str) {
	var newArr = str.split("");

	newArr.forEach(function(letter) {
		var obj = data.find(function(obj) {
			return obj.letter === letter;
		});
		typeArray.push(obj.type);
	});
	var start = typeArray.indexOf("vowel");

	if (typeArray[0] === "vowel") {
		//console.log(str + vEnd);
		return str + vEnd;
	} else {
		var decap = str.slice(0, start);
		var head = str.substr(start);
		//console.log(head + decap + cEnd);
		return head + decap + cEnd;
	}
}

translatePigLatin("eight");
