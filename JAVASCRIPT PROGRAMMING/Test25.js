"use strict";
// 25. PRINT SUM OF ALL EVEN NUMBER BETWEEN 0 TO N
const func25 = (range) => {
    let sum = 0;
    for (let i = 0; i <= range; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    console.log(`Sum: ${sum}`);
};
func25(10);
func25(50);
func25(100);