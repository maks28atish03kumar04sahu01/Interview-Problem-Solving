// 49. PRINT AND CHECK WHETHER THE NUMBER IS PERFECT SQUARE OR NOT
const perfectSquare = (ip: number): void => {
    let sqrtIp: number = Math.floor(Math.sqrt(ip));
    let testIp: number = sqrtIp * sqrtIp;
    if(testIp === ip) {
        process.stdout.write(`${ip} Is A Perfect Square Number.`);
    } else {
        process.stdout.write(`${ip} Is Not A Perfect Square Number.`);  
    }
    console.log();
}
perfectSquare(16);
perfectSquare(8);
perfectSquare(65);
perfectSquare(100);