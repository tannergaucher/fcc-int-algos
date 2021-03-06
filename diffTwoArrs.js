function diffArray(arr1, arr2) {
	var newArray = [];
	var answer = [];

	for (var i = 0; i < arr1.length; i++) {
		var arrObj1 = new Object();
		arrObj1.value = arr1[i];
		arrObj1.index = arr2.indexOf(arr1[i]);
		newArray.push(arrObj1);
	}

	for (var i = 0; i < arr2.length; i++) {
		var arrObj2 = new Object();
		arrObj2.value = arr2[i];
		arrObj2.index = arr1.indexOf(arr2[i]);
		newArray.push(arrObj2);
	}

	var notPresent = function(value) {
		return value.index == -1;
	};
	var differents = newArray.filter(notPresent);

	for (var i = 0; i < differents.length; i++) {
		answer.push(differents[i].value);
	}
	//console.log(answer);
	return answer;
}

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
