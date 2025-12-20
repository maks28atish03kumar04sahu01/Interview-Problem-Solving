// 33. PRINT THOSE NUMBER FROM RANGE1 TO RANGE2 WHICH ARE DIVISIBLE BY THE GIVEN TARGET
const func33 = (range1: number, range2: number, target: number):void => {
    for(let i = range1; i <= range2; i++) {
        if(i % target === 0) {
            process.stdout.write(`${i} `);
        }
    }
    console.log();
}
func33(20, 40, 4);
func33(50, 80, 12);