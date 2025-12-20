"use strict";
// 36. PRINT SUM OF THOSE NUMBER FROM 0 TO N WHICH ARE NOT DIVISIBLE BY THE GIVEN TARGET
const func36 = (range, target) => {
    let sum = 0;
    for (let i = 0; i <= range; i++) {
        if (i % target !== 0) {
            sum += i;
        }
    }
    console.log(`Sum: ${sum}`);
};
func36(10, 3);
func36(20, 3);
func36(40, 3);