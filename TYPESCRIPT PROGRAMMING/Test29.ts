// 29. PRINT MULTIPLICATION TABLE
const func29 = (ip: number, target: number): void => {
    for(let i = 0; i <= target; i++) {
        console.log(`${ip} * ${i} = ${ip * i}`);
    }
}
func29(5, 20);
func29(23, 10);