// 58. PRINT THE RANGE1 TO RANGE2 IN THE FORM OF (A^p)
const RangePower = (range1: number, range2: number, power: number): void => {
    for(let i: number = range1; i <= range2; i++) {
        process.stdout.write(`${Math.pow(i, power)} `);
    }
    console.log();
}
RangePower(10, 20, 3);
RangePower(50, 60, 2);