"use strict";
// 48. nCr & nPr IN JAVA
const fact = (ip) => {
    let temp = 1;
    for (let i = 1; i <= ip; i++) {
        temp *= i;
    }
    return temp;
};
let n = 5;
let r = 3;
let nr = n - r;
let nfact = fact(n);
let rfact = fact(r);
let nrfact = fact(nr);
let nCr = nfact / (rfact * (nrfact));
let nPr = nfact / nrfact;
console.log(`${n}C${r} : ${nCr}`);
console.log(`${n}P${r} : ${nPr}`);