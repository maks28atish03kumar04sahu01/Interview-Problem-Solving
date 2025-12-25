// 61. ARMSTRONG NUMBER
const Armstrong = (num: number): void => {
    let NUM: number = num;
    let res: number = num;
    let rem1: number = 0;
    let rem2: number = 0;
    let count: number = 0;
    let sum: number = 0;

    while(num !== 0) {
        rem1 = num % 10;
        count++;
        num = Math.floor(num / 10);
    }
    while(NUM != 0) {
        rem2 = NUM % 10;
        sum += Math.pow(rem2, count);
        NUM = Math.floor(NUM / 10);
    }
    if(res == sum) {
        console.log(`${sum} Is An Armstrong Number.`);
    } else {
        console.log(`${res} Is Not An Armstrong Number.`);
    }
}
Armstrong(153);
Armstrong(253);
Armstrong(1634);