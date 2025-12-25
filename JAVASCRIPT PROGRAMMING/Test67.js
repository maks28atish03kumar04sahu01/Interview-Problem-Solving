"use strict";
// 67. FACTORS OF A NUMBER
const Factors = (num) => {
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            process.stdout.write(`${i} `);
        }
    }
    console.log();
};
Factors(14);
Factors(55);