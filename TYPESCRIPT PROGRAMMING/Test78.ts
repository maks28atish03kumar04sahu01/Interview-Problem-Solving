// 78. CONVERT CELSIUS TO FAHRENHEIT IN JAVA
const temp = (cel: number, fah: number): void => {
    let CtoF: number = (cel * 9.0 / 5.0) + 32;
    let FtoC: number = (fah - 32) * 5.0 / 9.0;
    console.log(`Celsius To Fahrenheit: ${CtoF}`);
    console.log(`Fahrenheit To Celsius: ${FtoC}`);
}
temp(10, 50);
temp(60, 80);