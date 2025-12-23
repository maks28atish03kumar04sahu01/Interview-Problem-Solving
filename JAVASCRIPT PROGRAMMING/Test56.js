"use strict";
// 56. PRINT THE RANGE1 TO RANGE2 IN THE FORM OF (A^3)
const cubeRange = (range1, range2) => {
    for (let i = range1; i <= range2; i++) {
        process.stdout.write(`${i * i * i} `);
    }
    console.log();
};
cubeRange(10, 20);
cubeRange(30, 40);