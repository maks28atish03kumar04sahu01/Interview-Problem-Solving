"use strict";
// 60. PRINT THE DIGITS OF A NUMBER (INPUT: 153 OUTPUT: 1 5 3)
const digitNumber = (input) => {
    let temp = 1;
    while (Math.floor(input / temp) >= 10) {
        temp *= 10;
    }
    while (temp > 0) {
        process.stdout.write(`${Math.floor(input / temp)} `);
        input %= temp;
        temp = Math.floor(temp / 10);
    }
    console.log();
};
digitNumber(153);
digitNumber(1234);
digitNumber(12345);