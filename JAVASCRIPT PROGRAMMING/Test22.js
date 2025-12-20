"use strict";
// 22. ARITHMETIC OPERATION CALCULATOR IN PROGRAMMING
const func = (ip1, ip2, choice) => {
    while (true) {
        switch (choice) {
            case "+":
                return `${ip1} + ${ip2} = ${ip1 + ip2}`;
            case "-":
                return `${ip1} - ${ip2} = ${ip1 - ip2}`;
            case "*":
                return `${ip1} * ${ip2} = ${ip1 * ip2}`;
            case "/":
                return `${ip1} / ${ip2} = ${ip1 / ip2}`;
            case "%":
                return `${ip1} % ${ip2} = ${ip1 % ip2}`;
            default:
                return `Invalid Operation.`;
        }
    }
};
console.log(func(125, 23, "+"));
console.log(func(125, 23, "-"));
console.log(func(125, 23, "*"));
console.log(func(125, 23, "/"));
console.log(func(125, 23, "%"));
console.log(func(125, 23, "55"));