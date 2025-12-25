// 76. PRINT NUMBERS FROM RANGE1 TO RANGE2 AND DISPLAY THOSE NUMBERS WHICH ARE MULTIPLES OF A GIVEN NUMBER
const Func = (range1: number, range2: number, target: number): void => {
    for(let i = range1; i <= range2; i++) {
        if(i % target === 0) {
            process.stdout.write(`${i} `);
        }
    }
    console.log();
}
Func(100, 200, 14);
Func(200, 400, 35);