function convertToRoman(num) {
	var answer = [];
	var romNums = [
		"I",
		"II",
		"III",
		"IV",
		"V",
		"VI",
		"VII",
		"VIII",
		"IX",
		"X",
		"XL",
		"L",
		"XC",
		"C",
		"D",
		"CM",
		"M"
	];
	var numbers = [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		40,
		50,
		90,
		100,
		500,
		900,
		1000
	];

	//while num > 0
	while (num > 0) {
		//splice num into array
		numbers.splice(1, 0, num);
		//sort array
		numbers.sort(function(a, b) {
			return a - b;
		});
		//console.log(numbers);

		//get index of num

		if (
			num === 1 ||
			num === 2 ||
			num === 3 ||
			num === 4 ||
			num === 5 ||
			num === 6 ||
			num === 7 ||
			num === 8 ||
			num === 9 ||
			num === 10 ||
			num === 50 ||
			num === 100 ||
			num === 500 ||
			num === 1000
		) {
			var start = numbers.indexOf(num);
		} else {
			var start = numbers.indexOf(num) - 1;
		}
		//push roman equivilent to answer array
		answer.push(romNums[start]);
		//subtract current value of num from num
		num -= numbers[start];
		//splice num  off of array
		numbers.splice(num, 1);
	}
	var joined = answer.join("");
	//console.log(joined);
	return joined;
}

convertToRoman(001);
