function addTogether() {
	var args = [...arguments];

	var oneArgAnd = function(args, expected) {
		return args + expected;
	};

	if (
		args.length === 2 &&
		Number.isInteger(args[0]) &&
		Number.isInteger(args[1])
	) {
		//console.log(args[0] + args[1]);
		var a = args[0];
		var b = args[1];
		return a + b;
	} else if (args.length === 1 && Number.isInteger(args[0])) {
		return function(a, b) {
			a = args[0];
			if (Number.isInteger(b)) {
				return a + b;
			}
		};
	} else {
		//console.log(undefined);
		return undefined;
	}

	//return false;
}

addTogether(2, 4);
