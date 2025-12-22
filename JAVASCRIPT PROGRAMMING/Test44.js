"use strict";
// 44. NTH TERM OF FIBONACCI SERIES
const nthfibonacci = (range) => {
    let num0 = 0;
    let num1 = 1;
    let temp = 0;
    for (let i = 3; i <= range; i++) {
        temp = num0 + num1;
        num0 = num1;
        num1 = temp;
    }
    console.log(`${range}th Fibonacci Series Is: ${temp} `);
};
nthfibonacci(10);
nthfibonacci(20);