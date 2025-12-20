"use strict";
// 12. PRINT WHETHER THE NUMBER IS POSITIVE, NEGATIVE, OR ZERO
const func = (ip) => {
    if (ip > 0) {
        console.log(`${ip} Is Positive Number`);
    }
    else if (ip < 0) {
        console.log(`${ip} Is Negative Number`);
    }
    else {
        console.log(`${ip} Is Zero Value.`);
    }
};
func(10);
func(-12);
func(0);