"use strict";
// 17. PRINT NUMBERS FROM RANGE1 TO RANGE2 USING ANY LOOPING TECHNIQUE
const func = (range1, range2) => {
    for (let i = range1; i <= range2; i++) {
        process.stdout.write(`${i} `);
    }
    console.log();
};
func(10, 20);
func(30, 40);