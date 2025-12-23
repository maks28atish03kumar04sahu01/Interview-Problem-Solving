// 54. PRINT THE RANGE1 TO RANGE2 IN THR FORM OF (A^2)
const squareRange = (range1: number, range2: number): void => {
    for(let i: number = range1; i <= range2; i++) {
        process.stdout.write(`${i*i} `);
    }
    console.log();
}
squareRange(10, 20);
squareRange(30, 40);