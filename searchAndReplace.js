function myReplace(str, before, after) {
	var index = str.indexOf(before);
	var char = str.charAt(index);

	if (char == char.toUpperCase()) {
		var up = after.charAt(0).toUpperCase();
		var combined = up + after.slice(1);
		var after = combined;
	}

	var newstr = str.replace(before, after);

	//console.log(newstr);
	return newstr;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
