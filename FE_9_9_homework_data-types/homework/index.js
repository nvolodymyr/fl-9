//#!
function findType(someType) {
	return typeof someType;
}
//#2
let forEach = (array, fn) => {
	for (let i = 0; i < array.length; i++) {
		fn(array[i]);
	}
}
//#3
function map(array, fn) {
	let newArray = [];
	forEach(array, function (el) {
		newArray.push(fn(el));
	});
	return newArray;
}
//#4
function filter(array, fn) {
	let newArray = [];
	forEach(array, function (el) {
		if (fn(el)) {
			newArray.push(el);
		}
	});
	return newArray;
}
//#5
function getAdultAppleLovers(data) {
	let filterAllPerson = filter(data, function (person) {
		return person.age > 18 && person.favoriteFruit === 'apple';
	});
	return map(filterAllPerson, function (person) {
		return person.name;
	});
}
//#6
function keys(obj) {
	let arrayKeys = [];
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			arrayKeys.push(key);
		}
	}
	return arrayKeys;
}
//#7
function values(obj) {
	let arrayValues = [];
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			arrayValues.push(obj[key]);
		}
	}
	return arrayValues;
}
//#8
let showFormattedDate = date => {
	let monthNameShortVersion = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	return `It is ${date.getDate()} of ${monthNameShortVersion[date.getMonth()]}, ${date.getFullYear()}`;
}
