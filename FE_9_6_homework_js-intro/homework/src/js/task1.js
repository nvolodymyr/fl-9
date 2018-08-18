let prise = parseFloat(prompt('Money', '0'));
let discount = parseFloat(prompt('Discpont', '0'));


let outConsole = function (prise, discount) {
	let priseWithDiscount = prise - prise * discount / 100;
	let outAllvalue = `Price without discount: ` + +prise.toFixed(2) + `\nDiscount: ` + +discount.toFixed(2) +
		`% \nPrice with discount: ` + +priseWithDiscount.toFixed(2) + `\nSaved: ` +
		+(prise - priseWithDiscount).toFixed(2);
	return outAllvalue;
}
let validate = function (num) {
	return num < 0 || typeof num !== 'number' || num < 0 || isNaN(num);
}
let message;

if (validate(prise) || validate(discount) || discount > 100) {
	message = 'Invalid data';
} else {
	message = outConsole(prise, discount);
}
console.log(message);
