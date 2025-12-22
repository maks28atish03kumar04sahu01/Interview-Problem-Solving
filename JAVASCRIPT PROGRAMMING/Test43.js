"use strict";
// 43. FIBONACCI SERIES
const fibonacci = (range) => {
    let num0 = 0;
    let num1 = 1;
    let temp = 0;
    process.stdout.write(`${num0} ${num1} `);
    for (let i = 3; i <= range; i++) {
        temp = num0 + num1;
        num0 = num1;
        num1 = temp;
        process.stdout.write(`${temp} `);
    }
    console.log();
};
fibonacci(10);
fibonacci(20);