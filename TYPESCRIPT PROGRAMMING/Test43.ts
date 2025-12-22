// 43. FIBONACCI SERIES
const fibonacci = (range: number): void => {
    let num0: number = 0;
    let num1: number = 1;
    let temp: number = 0;
    process.stdout.write(`${num0} ${num1} `);
    for(let i: number = 3; i <= range; i++) {
        temp = num0 + num1;
        num0 = num1;
        num1 = temp;
        process.stdout.write(`${temp} `);
    }
    console.log();
}
fibonacci(10);
fibonacci(20);