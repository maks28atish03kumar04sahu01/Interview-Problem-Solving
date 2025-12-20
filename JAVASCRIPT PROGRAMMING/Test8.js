"use strict";
// 8. SWAPPING OF TWO VARIABLES' VALUES WITHOUT USING A THIRD VARIABLE
const swap = (ip1, ip2) => {
    console.log(`Current Num1 Value: ${ip1}`);
    console.log(`Current Num1 Value: ${ip2}`);
    ip2 = ip1 + ip2;
    ip1 = ip2 - ip1;
    ip2 = ip2 - ip1;
    console.log(`Updated Value Of Num1: ${ip1}`);
    console.log(`Updated Value Of Num2: ${ip2}`);
};
swap(20, 30);