var evenOrOdd = +process.argv[2];
var evenOrOddKey = evenOrOdd % 2 === 0 ? "even" : "odd";
var sum = +process.argv[3] + evenOrOdd;
var obj = {
    [evenOrOddKey]: venOrOdd,
    [sum]: sum
};
console.log(obj);