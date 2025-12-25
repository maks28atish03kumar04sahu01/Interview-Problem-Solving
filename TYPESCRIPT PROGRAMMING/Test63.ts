// 63. STRONG NUMBER
const StrongNumber = (num: number):void => {
    let temp: number = 1, NUM: number = num, count: number = 0;
    while(num !== 0) {
        let rem: number = num % 10;
        for(let i = 1; i <= rem; i++) {
            temp *= i;
        }
        count += temp;
        temp = 1;
        num = Math.floor(num / 10);
    }
    if(NUM === count) {
        console.log(`${NUM} Is A Strong Number.`);
    } else {
        console.log(`${NUM} Is Not A Strong Number.`);
    }
}
StrongNumber(145);
StrongNumber(265);