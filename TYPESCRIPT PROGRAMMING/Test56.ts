// 56. PRINT THE RANGE1 TO RANGE2 IN THE FORM OF (A^3)
const cubeRange = (range1: number, range2: number): void => {
    for(let i: number = range1; i <= range2; i++) {
        process.stdout.write(`${i*i*i} `);
    }
    console.log();
}
cubeRange(10, 20);
cubeRange(30, 40);