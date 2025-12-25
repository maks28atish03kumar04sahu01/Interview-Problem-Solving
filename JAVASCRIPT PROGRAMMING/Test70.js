"use strict";
// 70. AUTOMORPHIC NUMBER
const Automorphic = (num) => {
    if (num < 0)
        num = -num;
    let squareNum = num * num;
    let temp = num, count = 0;
    while (temp > 0) {
        count++;
        temp = Math.floor(temp / 10);
    }
    let lastdigit = squareNum % Math.floor(Math.pow(10, count));
    if (lastdigit === num)
        console.log(`${num} Is An Automorphic Number`);
    else
        console.log(`${num} Is Not An Automorphic Number.`);
};
Automorphic(25);
Automorphic(37);