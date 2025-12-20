"use strict";
// 21. PRINT ODD NUMBERS FROM RANGE1 TO RANGE2
const func = (range1, range2) => {
    for (let i = range1; i <= range2; i++) {
        if (i % 2 != 0) {
            process.stdout.write(`${i} `);
        }
    }
    console.log();
};
func(10, 20);
func(50, 60);
func(80, 90);