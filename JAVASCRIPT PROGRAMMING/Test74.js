"use strict";
// 74. CONVERT DECIMAL NUMBER TO ANY BASE OF NUMBER
const Convert = (num) => {
    console.log(`Decimal Number Is: ${num}`);
    console.log(`Decimal To Binary: ${num.toString(2)}`);
    console.log(`Decimal To Octal: ${num.toString(8)}`);
    console.log(`Decimal To Hexa Decimal: ${num.toString(16)}`);
    console.log();
};
Convert(255);
Convert(3526);
Convert(66);