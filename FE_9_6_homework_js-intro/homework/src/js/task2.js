// Your code goes here
let sideA = parseFloat(prompt('Enter A', '0'));
let sideB = parseFloat(prompt('Enter B', '0'));
let corner = parseFloat(prompt('Enter corner', '0'));
const SUM_CORNER = 180;
const ALPHA = Math.PI / SUM_CORNER * corner;


function getSideC() {
	let c = Math.sqrt(sideA * sideA + sideB * sideB - 2 * sideA * sideB * Math.cos(ALPHA));
	return c;
}

function getSquare() {
	let res = 1 / 2 * sideA * sideB * Math.sin(ALPHA);
	return res;
}

function getPerimeter() {
	return sideA + sideB + getSideC();
}

let validate = function (num) {
	return num < 0 || typeof num !== 'number' || num < 0 || isNaN(num);
}

let outConsole = function () {

	let outAllvalue = `c length: ` + +getSideC().toFixed(2) + `\nTriangle square: ` + +getSquare().toFixed(2) +
		`\nTriangle perimeter: ` + +getPerimeter().toFixed(2);
	return outAllvalue;
}
let message;
if (validate(sideA) || validate(sideB) || validate(corner) || corner >= SUM_CORNER) {
	message = 'Invalid data';
} else {
	message = outConsole();
}
console.log(message);
