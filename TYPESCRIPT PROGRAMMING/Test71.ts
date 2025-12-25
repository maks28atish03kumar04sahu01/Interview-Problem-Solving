// 71. PRIME NUMBER
const prime = (num: number): void => {
    let flag: boolean = true;
    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if(num % i === 0) flag = false;
    }
    if(!flag) console.log(`${num} Is Not A Prime Number.`);
    else console.log(`${num} Is A Prime Number.`);
}
prime(29);
prime(28);
prime(101);
prime(102);