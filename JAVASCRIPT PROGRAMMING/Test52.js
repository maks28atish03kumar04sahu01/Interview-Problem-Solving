"use strict";
// 52. TERNARY OPERATOR
const TernaryOperator = (ip1, ip2) => {
    let res = (ip1 > ip2) ? `${ip1} Grater Than ${ip2}` : `${ip2} Greater Than ${ip1}`;
    return res;
};
TernaryOperator(10, 20);
TernaryOperator(30, 20);