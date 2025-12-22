"use strict";
// 51. PRINT PERFECT SQUARE NUMBERS FROM RANGE1 TO RANGE2
const PerfectSqaureRange = (range1, range2) => {
    let start = Math.ceil(Math.sqrt(range1));
    for (let i = start; i * i <= range2; i++) {
        process.stdout.write(`${i * i} `);
    }
    console.log();
};
PerfectSqaureRange(100, 200);
PerfectSqaureRange(100, 500);
PerfectSqaureRange(500, 1000);