var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(val => {
    let commaSep = val.split(',');
    commaSep.forEach(val => {
        if (val !== '') args.push(+val);
    });
});
var avg = (...args) => args.reduce((prev, current) => prev + current) / args.length;
console.log(avg(...args));