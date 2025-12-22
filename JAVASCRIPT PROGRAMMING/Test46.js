"use strict";
// 46. ROOT OF A NUMBER (n√A)
const RootNumber = (ip, root) => {
    return Math.pow(ip, 1 / root);
};
console.log(`Res1: ${RootNumber(8, 3)}`);
console.log(`Res1: ${RootNumber(64, 2)}`);