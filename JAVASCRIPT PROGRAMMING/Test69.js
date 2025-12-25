"use strict";
// 69. PERFECT SQUARE NUMBER
const perfectSquare = (num) => {
    let sqrtnum = Math.floor(Math.sqrt(num));
    let flag = (sqrtnum * sqrtnum === num);
    let res = (flag) ? `${num} Is A Perfect Square Number.` :
        `${num} Is Not A Perfect Number.`;
    console.log(res);
};
perfectSquare(36);
perfectSquare(15);