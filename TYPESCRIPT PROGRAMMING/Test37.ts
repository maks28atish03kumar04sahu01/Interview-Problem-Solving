// 37. PRINT SUM OF THOSE NUMBER FROM RANGE1 TO RANGE2 WHICH ARE DIVISIBLE BY THE GIVEN TARGET
const func37 = (range1: number, range2: number, target: number): void => {
    let sum: number = 0;
    for(let i = range1; i <= range2; i++) {
        if(i % target === 0) {
            sum += i;
        }
    }
    console.log(`Sum: ${sum}`);
}
func37(30, 60, 3)
func37(60, 80, 4)