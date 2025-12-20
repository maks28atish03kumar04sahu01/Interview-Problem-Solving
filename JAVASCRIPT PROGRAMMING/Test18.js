"use strict";
// 18. PRINT EVEN NUMBERS FROM 0 TO N
const func = (range) => {
    for (let i = 0; i <= range; i++) {
        if (i % 2 == 0) {
            process.stdout.write(`${i} `);
        }
    }
    console.log();
};
func(10);
func(20);