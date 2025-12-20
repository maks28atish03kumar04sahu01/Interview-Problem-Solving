"use strict";
// 39. PRINT WHETHER THE GIVEN YEAR VALUE IS A LEAP YEAR OR NOT
const func39 = (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(`${year} Is Leap Year!`);
    }
    else {
        console.log(`${year} Is Not Leap year!`);
    }
};
func39(2024);
func39(2023);
func39(2021);
func39(2020);