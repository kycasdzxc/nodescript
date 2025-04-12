// const calc = require('./calc');

// console.log(calc.num);

// let res = calc.add(3, 1)
// console.log(res);

// res = calc.sub(3, 1);
// console.log(res);

const a = require('./a');
const b = require('./b');
const calc = require('./calc');

console.log(calc.num);

// 1.5초 후에 calc.num을 표시한다.
setTimeout(() => {
    console.log(calc.num);
}, 1500);

const fs = require('fs');

fs.readFile(__filename, (err, data) => {
    console.log(data);
})