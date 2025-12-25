// 70. AUTOMORPHIC NUMBER
const Automorphic = (num: number): void => {
    if(num < 0) num = -num;
    let squareNum: number = num * num;
    let temp: number = num, count: number = 0;
    while(temp > 0) {
        count++;
        temp = Math.floor(temp / 10);
    }
    let lastdigit:  number = squareNum % Math.floor(Math.pow(10, count));
    if(lastdigit === num) console.log(`${num} Is An Automorphic Number`);
    else console.log(`${num} Is Not An Automorphic Number.`);
}
Automorphic(25);
Automorphic(37);