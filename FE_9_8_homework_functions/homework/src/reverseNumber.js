function reverseNumber(numA) {
	let reversNumA = Math.abs(numA)
		.toString()
		.split('')
		.reverse()
		.join('');
	return numA > 0 ? reversNumA : -reversNumA;
}
//let a=-1234
//console.log(reverseNumber(a));
