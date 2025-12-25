"use strict";
// 78. CONVERT CELSIUS TO FAHRENHEIT IN JAVA
const temp = (cel, fah) => {
    let CtoF = (cel * 9.0 / 5.0) + 32;
    let FtoC = (fah - 32) * 5.0 / 9.0;
    console.log(`Celsius To Fahrenheit: ${CtoF}`);
    console.log(`Fahrenheit To Celsius: ${FtoC}`);
};
temp(10, 50);
temp(60, 80);