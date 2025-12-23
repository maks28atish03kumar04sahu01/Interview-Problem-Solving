"use strict";
// 54. PRINT THE RANGE1 TO RANGE2 IN THR FORM OF (A^2)
const squareRange = (range1, range2) => {
    for (let i = range1; i <= range2; i++) {
        process.stdout.write(`${i * i} `);
    }
    console.log();
};
squareRange(10, 20);
squareRange(30, 40);