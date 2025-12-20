"use strict";
// 38. PRINT SUM OF THOSE NUMBER FROM RANGE1 TO RANGE2 WHICH ARE NOT DIVISIBLE BY THE GIVEN TARGET
const func38 = (range1, range2, target) => {
    let sum = 0;
    for (let i = range1; i <= range2; i++) {
        if (i % target !== 0) {
            sum += i;
        }
    }
    console.log(`Sum: ${sum}`);
};
func38(30, 60, 3);
func38(60, 80, 4);