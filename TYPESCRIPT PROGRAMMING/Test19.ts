// 19. PRINT ODD NUMBERS FROM 0 TO N
const func = (range: number): void => {
    for(let i = 0; i <= range; i++) {
        if(i % 2 != 0) {
            process.stdout.write(`${i} `);
        }
    }
    console.log();
}
func(10);
func(20);