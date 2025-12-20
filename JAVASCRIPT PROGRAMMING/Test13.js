"use strict";
// 13. PRINT WHETHER THE NUMBER IS EVEN OR ODD
const func = (ip) => {
    if (ip % 2 == 0) {
        console.log(`${ip} Is Even Number.`);
    }
    else {
        console.log(`${ip} Is Odd Number.`);
    }
};
func(12);
func(-14);
func(0);
func(19);
func(-23);
func(0);