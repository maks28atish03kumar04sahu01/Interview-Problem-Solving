"use strict";
// 47. FACTORIAL OF A NUMBER
const factorial = (ip) => {
    let temp = 1;
    for (let i = 1; i <= ip; i++) {
        temp *= i;
    }
    return temp;
};
console.log(`Factorial Of 5: ${factorial(5)}`);
console.log(`Factorial Of 6: ${factorial(6)}`);
console.log(`Factorial Of 10: ${factorial(10)}`);