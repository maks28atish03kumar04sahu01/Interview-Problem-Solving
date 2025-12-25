"use strict";
// 66. PALINDROME NUMBER
const Palindrome = (num) => {
    let NUM = num, rev = 0;
    while (num != 0) {
        let rem = num % 10;
        rev = (rev * 10) + rem;
        num = Math.floor(num / 10);
    }
    let res = (NUM == rev) ?
        `${NUM} Is A Palindrome Number.` : `${NUM} Is Not A Palindrome Number.`;
    console.log(res);
};
Palindrome(121);
Palindrome(153);