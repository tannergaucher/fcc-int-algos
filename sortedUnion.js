function uniqueNewYork(arr) {
	const args = [...arguments];

	const flat = args.reduce((total, number) => {
		number.forEach(number => {
			if (total.indexOf(number) === -1) {
				total.push(number);
			}
		});
		return total;
	}, []);

	console.log(flat);
}
uniqueNewYork([1, 3, 2], [5, 2, 1, 4], [2, 1]);
