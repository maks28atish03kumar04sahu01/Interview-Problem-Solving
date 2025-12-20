// 35. PRINT SUM OF THOSE NUMBER FROM 0 TO N WHICH ARE DIVISIBLE BY THE GIVEN TARGET
const func35 = (range: number, target: number): void => {
    let sum: number = 0;
    for(let i = 0; i <= range; i++) {
        if(i % target === 0) {
            sum += i;
        }
    }
    console.log(`Sum: ${sum}`);
}
func35(10, 3);
func35(20, 3);
func35(40, 3);