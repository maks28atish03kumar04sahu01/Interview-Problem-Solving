// 27. PRINT SUM OF ALL ODD NUMBER BETWEEN 0 TO N
const func27 = (range: number): void => {
    let sum: number = 0;
    for(let i = 0; i <= range; i++) {
        if(i % 2 !== 0) {
            sum += i;
        }
    }
    console.log(`Sum: ${sum}`);
}
func27(10);
func27(50);
func27(100);