// 65. SUM OF DIGITS OF A NUMBER
const sumOfDigit = (num: number): void => {
    let sum: number = 0, NUM: number = num;
    while(num !== 0) {
        let rem: number = num % 10;
        sum += rem;
        num = Math.floor(num / 10);
    }
    console.log(`Sum Of Digits Of ${NUM} Is: ${sum}`);
}
sumOfDigit(153);
sumOfDigit(1234);