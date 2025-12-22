// 44. NTH TERM OF FIBONACCI SERIES
const nthfibonacci = (range: number): void => {
    let num0: number = 0;
    let num1: number = 1;
    let temp: number = 0;
    for(let i: number = 3; i <= range; i++) {
        temp = num0 + num1;
        num0 = num1;
        num1 = temp;
    }
    console.log(`${range}th Fibonacci Series Is: ${temp} `);
}
nthfibonacci(10);
nthfibonacci(20);