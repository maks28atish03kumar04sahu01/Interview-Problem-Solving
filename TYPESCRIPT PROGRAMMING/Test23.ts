// 23. PRINT SUM OF ALL NUMBERS BETWEEN 0 TO N
const func23 = (range: number): void => {
    let sum: number = 0;
    for(let i = 0; i <= range; i++) {
        sum += i;
    }
    console.log(`Sum = ${sum}`);
} 
func23(10);
func23(50);
func23(100);