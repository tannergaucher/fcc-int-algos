function fearNotLetter(str) {
	var newArr = str.split("");
	var codeArr = [];
	var letterArr = [];
	var newArrExpanded = [];
	var answers = [];
	var charCodes = newArr.map(function(str) {
		return str.charCodeAt();
	});
	codeArr.push(charCodes);

	charCodes.forEach(function(number) {
		letterArr.push(String.fromCharCode(number));
	});
	//console.log("charcodes", charCodes, letterArr);

	var startNumber = charCodes[0];
	var endIndex = charCodes.length - 1;
	var endNumber = charCodes[endIndex];

	//1 make a new array from startNumber to endNumber
	var arrayLength = endNumber - startNumber;
	var counter = startNumber;

	for (var i = startNumber; i <= endNumber; i++) {
		if (charCodes.indexOf(i) === -1) {
			answers.push(i);
		}
	}
	//console.log(String.fromCharCode(answers));

	if (answers.length !== 0) {
		//console.log(String.fromCharCode(answers));
		return String.fromCharCode(answers);
	} else {
		return undefined;
	}
}

fearNotLetter("abd");
