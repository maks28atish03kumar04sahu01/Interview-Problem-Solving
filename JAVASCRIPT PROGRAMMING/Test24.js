"use strict";
// 24. PRINT SUM OF ALL NUMBERS BETWEEN RANGE1 TO RANGE2
const func24 = (range1, range2) => {
    let sum = 0;
    for (let i = range1; i <= range2; i++) {
        sum += i;
    }
    console.log(`Sum: ${sum}`);
};
func24(10, 20);
func24(10, 50);
func24(0, 100);