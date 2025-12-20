// 34. PRINT THOSE NUMBER FROM RANGE1 TO RANGE2 WHICH ARE NOT DIVISIBLE BY THE GIVEN TARGET
const func34 = (range1: number, range2: number, target: number):void => {
    for(let i = range1; i <= range2; i++) {
        if(i % target !== 0) {
            process.stdout.write(`${i} `);
        }
    }
    console.log();
}
func34(20, 40, 4);
func34(50, 80, 12);