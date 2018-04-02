//PASS
function convertHTML(str) {
	var amp = /\&/g;
	var less = /\</g;
	var great = /\>/g;
	var quot = /\"/g;
	var apos = /\'/g;

	var rep1 = str.replace(amp, "&amp;");
	var rep2 = rep1.replace(less, "&lt;");
	var rep3 = rep2.replace(great, "&gt;");
	var rep4 = rep3.replace(quot, "&quot;");
	var rep5 = rep4.replace(apos, "&apos;");
	console.log(rep5);
	return rep5;
}

convertHTML("Dolce & Gabbana");
