// 57. PRINT THE 0 TO N IN THE FORM OF (A^p)
const SeriesPower = (range: number, power: number): void => {
    for(let i: number = 0; i <= range; i++) {
        process.stdout.write(`${Math.pow(i, power)} `);
    }
    console.log();
}
SeriesPower(10, 3);
SeriesPower(20, 4);