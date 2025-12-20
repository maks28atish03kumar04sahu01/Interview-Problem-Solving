"use strict";
// 28. PRINT SUM OF ALL ODD NUMBER BETWEEN RANGE1 TO RANGE2
const func28 = (range1, range2) => {
    let sum = 0;
    for (let i = range1; i <= range2; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    console.log(`Sum: ${sum}`);
};
func28(100, 200);
func28(50, 100);
func28(1, 50);