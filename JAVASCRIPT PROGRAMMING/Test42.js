"use strict";
// 42. DECREMENT OPERATOR
const preDecrement = (num) => {
    console.log(`Current Num Value: ${num}`);
    console.log(`Pre Decrement --Num: ${--num}`);
    console.log(`Updated Num Value: ${num}`);
};
preDecrement(10);
console.log();
const postDecrement = (num) => {
    console.log(`Current Num Value: ${num}`);
    console.log(`Post Decrement Num--: ${num--}`);
    console.log(`Updated Num Value: ${num}`);
};
postDecrement(20);