"use strict";
// 73. PRIME NUMBERS FROM RANGE1 TO RANGE2
const prime = (num) => {
    let flag = true;
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0)
            flag = false;
    }
    return flag;
};
const primeSeries = (range1, range2) => {
    for (let i = range1; i <= range2; i++) {
        if (prime(i)) {
            process.stdout.write(`${i} `);
        }
    }
    console.log();
};
primeSeries(100, 200);
primeSeries(200, 300);