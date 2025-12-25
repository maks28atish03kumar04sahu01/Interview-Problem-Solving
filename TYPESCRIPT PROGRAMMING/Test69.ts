// 69. PERFECT SQUARE NUMBER
const perfectSquare = (num: number): void => {
    let sqrtnum: number = Math.floor(Math.sqrt(num));
    let flag: boolean = (sqrtnum * sqrtnum === num);
    let res: string = (flag) ? `${num} Is A Perfect Square Number.` :
        `${num} Is Not A Perfect Number.`;
    console.log(res);
}
perfectSquare(36);
perfectSquare(15);