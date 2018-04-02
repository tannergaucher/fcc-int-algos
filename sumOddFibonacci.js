function sumFibs(num) {
	let fib = [1, 1, 2];
	let lastInd = fib.slice(-1)[0];
	let secondLastInd = fib.slice(-2)[0];

	//make fibonacci sequence
	while (num > lastInd) {
		lastInd = fib.slice(-1)[0];
		secondLastInd = fib.slice(-2)[0];
		var result = lastInd + secondLastInd;
		if (result > num) break;
		fib.push(result);
	}
	console.log(fib);

	//filter odd numbers
	const returnOdds = number => number % 2 !== 0;

	//reduce odds to sum
	const reducer = (accumulator, currentValue) => accumulator + currentValue;

	var oddFibs = fib.filter(returnOdds);
	var solution = oddFibs.reduce(reducer);
	//console.log(solution);
	return solution;
}

sumFibs(100);
