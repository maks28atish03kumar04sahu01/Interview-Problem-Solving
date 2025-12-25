"use strict";
// 68. PERFECT NUMBER
const PerfectNumber = (num) => {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0)
            sum += i;
    }
    if (num === sum)
        console.log(`${num} Is A Perfect Number.`);
    else
        console.log(`${num} Is Not A Perfect Number.`);
};
PerfectNumber(28);
PerfectNumber(27);