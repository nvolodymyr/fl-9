const max = process.argv[2];
let FizzBuzz = {
    [Symbol.iterator]() {
        let startElement = 1;
        return {
            next() {
                let elemForReturn = '';
                if (startElement % 3 === 0) {
                    elemForReturn = 'Fizz';
                } else if (startElement % 5 === 0) {
                    elemForReturn = 'Buzz';
                } else if (startElement % 15 === 0) {
                    elemForReturn = 'FizzBuzz.';
                }
                if (startElement <= max) {
                    startElement++;
                    return {
                        done: false,
                        value: elemForReturn
                    }

                }
                return {
                    done: true
                }


            }
        }
    }
}

for (var n of FizzBuzz) {
    console.log(n);
}