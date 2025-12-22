"use strict";
// 41. INCREMENT OPERATOR
const preIncrement = (num) => {
    console.log(`Current Num Value: ${num}`);
    console.log(`Pre Increment ++Num: ${++num}`);
    console.log(`Updated Num Value: ${num}`);
};
preIncrement(10);
console.log();
const postIncrement = (num) => {
    console.log(`Current Num Value: ${num}`);
    console.log(`Post Increment Num++: ${num++}`);
    console.log(`Updated Num Value: ${num}`);
};
postIncrement(20);