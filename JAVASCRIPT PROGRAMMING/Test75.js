"use strict";
// 75. PRINT NUMBERS FROM 1 TO N AND DISPLAY THOSE NUMBERS WHICH ARE MULTIPLES OF A GIVEN NUMBER
const Func = (range, target) => {
    for (let i = 0; i <= range; i++) {
        if (i % target === 0) {
            process.stdout.write(`${i} `);
        }
    }
    console.log();
};
Func(100, 14);
Func(200, 35);