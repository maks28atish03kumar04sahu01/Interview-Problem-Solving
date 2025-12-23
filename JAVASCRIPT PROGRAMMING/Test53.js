"use strict";
//53.  PRINT THE FOLLOWING SERIES 0 1 4 9 16 25 36... N
const squareSeries = (range) => {
    for (let i = 0; i <= range; i++) {
        process.stdout.write(`${i * i} `);
    }
    console.log();
};
squareSeries(10);
squareSeries(20);