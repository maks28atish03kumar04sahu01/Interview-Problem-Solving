// 26. PRINT SUM OF ALL EVEN NUMBER BETWEEN RANGE1 TO RANGE2
const func26 = (range1: number, range2: number): void => {
    let sum: number = 0;
    for(let i = range1; i <= range2; i++) {
        if(i % 2 === 0) {
            sum += i;
        }
    }
    console.log(`Sum: ${sum}`);
}
func26(100, 200);
func26(50, 100);
func26(1, 50);