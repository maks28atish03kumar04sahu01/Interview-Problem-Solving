// 72. PRIME NUMBERS FROM 0 TO N
const prime = (num: number): boolean => {
    let flag: boolean = true;
    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if(num % i === 0) flag = false;
    }
    return flag;
}
const primeSeries = (range: number): void => {
    for(let i = 2; i <= range; i++) {
        if(prime(i)) {
            process.stdout.write(`${i} `);
        }
    }
    console.log();
}
primeSeries(100);
primeSeries(200);