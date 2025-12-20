// 32. PRINT THOSE NUMBER FROM 0 TO N WHICH ARE NOT DIVISIBLE BY THE GIVEN TARGET
const func32 = (range: number, target: number): void => {
    for(let i = 0; i <= range; i++) {
        if(i % target !== 0) {
            process.stdout.write(`${i} `);
        }
    }
    console.log();
}
func32(10, 3);
func32(30, 7);