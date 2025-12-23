"use strict";
// 58. PRINT THE RANGE1 TO RANGE2 IN THE FORM OF (A^p)
const RangePower = (range1, range2, power) => {
    for (let i = range1; i <= range2; i++) {
        process.stdout.write(`${Math.pow(i, power)} `);
    }
    console.log();
};
RangePower(10, 20, 3);
RangePower(50, 60, 2);