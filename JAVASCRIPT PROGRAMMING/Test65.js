"use strict";
// 65. SUM OF DIGITS OF A NUMBER
const sumOfDigit = (num) => {
    let sum = 0, NUM = num;
    while (num !== 0) {
        let rem = num % 10;
        sum += rem;
        num = Math.floor(num / 10);
    }
    console.log(`Sum Of Digits Of ${NUM} Is: ${sum}`);
};
sumOfDigit(153);
sumOfDigit(1234);