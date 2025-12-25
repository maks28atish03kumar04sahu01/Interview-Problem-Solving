// 62. REVERSE NUMBER
const Reverse = (num: number): void => {
    let rev: number = 0;
    let NUM: number = num;
    while(num != 0) {
        let rem: number = num % 10;
        rev = (rev * 10) + rem;
        num = Math.floor(num / 10);
    }
    console.log(`Reverse Of ${NUM} Is: ${rev}`);
}
Reverse(123);
Reverse(1234);
Reverse(12345);