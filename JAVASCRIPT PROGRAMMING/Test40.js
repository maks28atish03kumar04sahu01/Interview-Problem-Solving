"use strict";
// 40. FIND YOUR AGE
const func40 = (year, month, day) => {
    let date = new Date();
    let date_year = date.getFullYear();
    let date_month = date.getMonth() + 1;
    let date_day = date.getDate();
    console.log(`Today Date: ${date_day}`);
    console.log(`Today Month: ${date_month}`);
    console.log(`Today year: ${date_year}`);
    console.log("------------------------------------");
    console.log(`Your Birth Date: ${day}`);
    console.log(`Your Birth Month: ${month}`);
    console.log(`Your Birth Year: ${year}`);
    console.log("------------------------------------");
    let age_date = date_day - day;
    let age_month = date_month - month;
    let age_year = date_year - year;
    if (age_date < 0) {
        let agedate = (age_date) * (-1);
        console.log(`Day: ${agedate}`);
    }
    else {
        console.log(`Day: ${age_date}`);
    }
    if (age_month < 0) {
        let agemonth = (age_month) * (-1);
        console.log(`Month: ${agemonth}`);
    }
    else {
        console.log(`Month: ${age_month}`);
    }
    console.log(`Year: ${age_year}`);
};
func40(2001, 4, 28);
func40(2001, 3, 28);