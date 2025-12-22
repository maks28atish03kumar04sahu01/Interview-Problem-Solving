"use strict";
// 49. PRINT AND CHECK WHETHER THE NUMBER IS PERFECT SQUARE OR NOT
const perfectSquare = (ip) => {
    let sqrtIp = Math.floor(Math.sqrt(ip));
    let testIp = sqrtIp * sqrtIp;
    if (testIp === ip) {
        process.stdout.write(`${ip} Is A Perfect Square Number.`);
    }
    else {
        process.stdout.write(`${ip} Is Not A Perfect Square Number.`);
    }
    console.log();
};
perfectSquare(16);
perfectSquare(8);
perfectSquare(65);
perfectSquare(100);