let inputs = process.argv.slice(2);
let result = inputs.map(el => el[0].toUpperCase())
    .reduce((prev, current) => prev += current, "");
console.log(result);