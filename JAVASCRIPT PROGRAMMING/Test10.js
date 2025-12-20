"use strict";
// 10. QUESTIONS BASED ON RELATIONAL OPERATORS
const func = (mark) => {
    if (mark <= 100 && mark >= 90) {
        console.log("Grade A+");
    }
    else if (mark <= 89 && mark >= 80) {
        console.log("Grade A");
    }
    else if (mark <= 79 && mark >= 70) {
        console.log("Grade B");
    }
    else if (mark <= 69 && mark >= 60) {
        console.log("Grade C");
    }
    else {
        console.log("Grade D");
    }
};
func(58);
func(65);
func(72);
func(88);
func(92);