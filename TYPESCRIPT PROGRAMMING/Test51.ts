// 51. PRINT PERFECT SQUARE NUMBERS FROM RANGE1 TO RANGE2
const PerfectSqaureRange = (range1: number, range2: number): void => {
    let start: number = Math.ceil(Math.sqrt(range1));
    for(let i: number = start; i * i <= range2; i++) {
        process.stdout.write(`${i * i} `);
    }
    console.log();
}
PerfectSqaureRange(100, 200);
PerfectSqaureRange(100, 500);
PerfectSqaureRange(500, 1000);