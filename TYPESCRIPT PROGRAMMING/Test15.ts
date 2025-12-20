// 15. PRINT THE LARGEST NUMBER BETWEEN THREE NUMBERS
const func = (ip1:number, ip2:number, ip3:number): String => {
    return (ip1 > ip2 && ip1 > ip3) ? `${ip1} Greatest Between Three Number.` : (ip2 > ip1 && ip2 > ip3) ? `${ip2} Greatest Between Three Number.` : `${ip3} Greatest Between Three Number.`;
}
console.log(func(12, 10, 8));
console.log(func(12, 13, 11));
console.log(func(12, 15, 17));