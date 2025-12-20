"use strict";
// 27. PRINT SUM OF ALL ODD NUMBER BETWEEN 0 TO N
const func27 = (range) => {
    let sum = 0;
    for (let i = 0; i <= range; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    console.log(`Sum: ${sum}`);
};
func27(10);
func27(50);
func27(100);