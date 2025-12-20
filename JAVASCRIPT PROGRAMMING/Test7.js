"use strict";
// 7. SWAPPING OF TWO VARIABLES' VALUES USING A THIRD VARIABLE
const tempSwap = (ip1, ip2) => {
    console.log(`Current Num1 Value: ${ip1}`);
    console.log(`Current Num2 Value: ${ip2}`);
    let temp = 0;
    temp = ip1;
    ip1 = ip2;
    ip2 = temp;
    console.log(`Updated Num1 Value: ${ip1}`);
    console.log(`Updated Num2 Value: ${ip2}`);
};
tempSwap(10, 20);