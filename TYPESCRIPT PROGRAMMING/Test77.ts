// 77. HCF AND LCM OF TWO NUMBERS
const HcfLcm = (num1: number, num2: number): void => {
    let a: number = num1, b: number = num2;
    let t: number = 0, HCF: number = 0, LCM: number = 0;
    while(b !== 0) {
        t = b;
        b = a % b;
        a = t;
    }
    HCF = a;
    LCM = (num1 * num2) / HCF;
    console.log(`LCM: ${LCM}`);
    console.log(`HCF: ${HCF}`);
}
HcfLcm(12, 15);
HcfLcm(120, 160);