// 31. PRINT THOSE NUMBER FROM 0 TO N WHICH ARE DIVISIBLE BY THE GIVEN TARGET
const func31 = (range: number, target: number): void => {
    for(let i = 0; i <= range; i++) {
        if(i % target === 0) {
            process.stdout.write(`${i} `);
        }
    }
    console.log();
}
func31(10, 3);
func31(20, 7);