// 28. PRINT SUM OF ALL ODD NUMBER BETWEEN RANGE1 TO RANGE2
const func28 = (range1: number, range2: number): void => {
    let sum: number = 0;
    for(let i = range1; i <= range2; i++) {
        if(i % 2 !== 0) {
            sum += i;
        }
    }
    console.log(`Sum: ${sum}`);
}
func28(100, 200);
func28(50, 100);
func28(1, 50);