// 48. nCr & nPr IN JAVA
const fact = (ip: number): number => {
    let temp: number = 1;
    for(let i: number = 1; i <= ip; i++) {
        temp *= i;
    }
    return temp;
}
let n: number = 5;
let r: number = 3;
let nr: number = n - r;
let nfact = fact(n);
let rfact = fact(r);
let nrfact = fact(nr);
let nCr = nfact / (rfact * (nrfact));
let nPr = nfact / nrfact;
console.log(`${n}C${r} : ${nCr}`);
console.log(`${n}P${r} : ${nPr}`);