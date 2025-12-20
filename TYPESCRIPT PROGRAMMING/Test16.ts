// 16. PRINT NUMBERS FROM n TO N USING ANY LOOPING TECHNIQUE
const func = (range:number): void => {
    for(let i: number = 0; i <= range; i++) {
        process.stdout.write(`${i} `);
    }
    console.log();
}
func(10);
func(20);
func(30);