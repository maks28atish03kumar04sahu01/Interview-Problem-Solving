"use strict";
// 55. PRINT THE THE FOLLOWING SERIES 0 1 8 27 64 125 216... N
const cubeSeries = (range) => {
    for (let i = 0; i <= range; i++) {
        process.stdout.write(`${i * i * i} `);
    }
    console.log();
};
cubeSeries(10);
cubeSeries(20);