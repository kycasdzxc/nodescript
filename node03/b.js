const calc = require('./calc');

// 1초 후 calc.num을 바꿔 쓴다.
setTimeout(() => {
    calc.num = 10;
}, 1000);