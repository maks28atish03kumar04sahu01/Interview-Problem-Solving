// 50. PRINT PERFECT SQUARE NUMBERS FROM 0 TO N
const PerfectSquareN = (range: number): void => {
    for(let i: number = 0; i * i <= range; i++) {
        process.stdout.write(`${i * i} `);
    }
    console.log();
}
PerfectSquareN(10);
PerfectSquareN(20);
PerfectSquareN(50);
PerfectSquareN(100);