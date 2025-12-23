// 59. PRINT THE DIGITS OF A NUMBER (INPUT: 153 OUTPUT: 3 5 1)
const digitOfNumber = (input: number): void => {
    while(input !== 0) {
        let rem: number = input % 10;
        process.stdout.write(`${rem} `);
        input = Math.floor(input / 10);
    }
    console.log();
}
digitOfNumber(153);
digitOfNumber(1234);