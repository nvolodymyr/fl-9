const max = process.argv[2];
let FizzBuzz = function* () {
    let startElement = 1;
    let elemForReturn = '';
    while (startElement <= max) {
        if (startElement % 3 === 0) {
            elemForReturn = 'Fizz';
        } else if (startElement % 5 === 0) {
            elemForReturn = 'Buzz';
        } else if (startElement % 15 === 0) {
            elemForReturn = 'FizzBuzz.';
        }
        startElement++;
        yield elemForReturn;
    }
}();
for (let n of FizzBuzz) {
    console.log(n);
}