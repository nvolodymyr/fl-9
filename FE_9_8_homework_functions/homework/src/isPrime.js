function isPrime(numA) {
	let magicNumber=2;
	if (numA === magicNumber) {
		return true;
	} else if (numA > 1) {
		for (let i = 2; i < numA; i++) {

			if (numA % i !== 0) {
				return true;
			} else if (numA === i * i) {
				return false
			} else {
				return false;
			}
		}
	} else {
		return false;
	}

}


