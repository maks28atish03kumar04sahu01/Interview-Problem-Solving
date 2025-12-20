// 14. PRINT THE LARGEST NUMBER BETWEEN TWO NUMBERS
const func = (ip1: number, ip2: number): String => {
    return (ip1 > ip2) ? `${ip1} Greater Then ${ip2}` : `${ip2} Greater Than ${ip1}`;
}
console.log(func(12, 10));
console.log(func(18, 20));