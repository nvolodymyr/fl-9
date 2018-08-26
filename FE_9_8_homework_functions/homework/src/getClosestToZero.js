function getClosestToZero() {
	let minNum = arguments[0];
	for (let i = 0; i < arguments.length; i++) {
		if (Math.abs(arguments[i] < Math.abs(minNum))) {
			minNum = arguments[i];
		}
	}
	return minNum;
}
//console.log(getClosestToZero(22,-1,5,25,1,0))
