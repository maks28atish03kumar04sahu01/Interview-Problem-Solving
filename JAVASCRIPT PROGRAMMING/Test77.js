"use strict";
// 77. HCF AND LCM OF TWO NUMBERS
const HcfLcm = (num1, num2) => {
    let a = num1, b = num2;
    let t = 0, HCF = 0, LCM = 0;
    while (b !== 0) {
        t = b;
        b = a % b;
        a = t;
    }
    HCF = a;
    LCM = (num1 * num2) / HCF;
    console.log(`LCM: ${LCM}`);
    console.log(`HCF: ${HCF}`);
};
HcfLcm(12, 15);
HcfLcm(120, 160);