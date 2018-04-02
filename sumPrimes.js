function sumPrimes(num) {
	var array = [];
	var divisors = [];
	var primes = [];
	var counter = 0;

	//make array of all nums from 1 to num
	for (var i = 1; i <= num; i++) {
		array.push(i);
	}

	for (var i = 0; i < array.length; i++) {
		var divisor = array[i];
		//divide each num in array by all nums from 1 to num
		array.forEach(function(num) {
			//check if evenly divisible
			if (num % divisor === 0) {
				divisors.push(num);
			}
		});
	}
	//count number of times a number is evenly divided
	var counts = {};
	divisors.forEach(function(x) {
		counts[x] = (counts[x] || 0) + 1;
	});
	//if number is evenly divided 2 times, it's prime
	for (val in counts) {
		if (counts[val] === 2) {
			primes.push(val);
		}
	}

	//add together all primes. reduce would be better!
	primes.forEach(function(number) {
		counter += +number;
	});
	console.log(counter);
	return counter;
}

sumPrimes(10);
