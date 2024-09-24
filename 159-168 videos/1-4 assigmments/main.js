// ================== assignment 1 ====================
let myBirthDate = new Date('may 25 2002');
let dateNow = new Date();
let ageInMS = dateNow - myBirthDate;
console.log(`${(ageInMS/1000).toFixed()} Seconds`);
console.log(`${(ageInMS/1000/60).toFixed()} Minutes`);
console.log(`${(ageInMS/1000/60/60).toFixed()} Hours`);
console.log(`${(ageInMS/1000/60/60/24).toFixed()} Days`);
console.log(`${(ageInMS/1000/60/60/24/30).toFixed()} Months`);
console.log(`${(ageInMS/1000/60/60/24/30/12).toFixed()} Years`);

// Needed Output
// "1247939400 Seconds"
// "20798990 Minutes"
// "346650 Hours"
// "14444 Days"
// "481 Months"
// "40 Years"
console.log("======================")
// ================== assignment 2 =======================

let startDate = new Date();
startDate.setTime(0);
startDate.setHours(0);
startDate.setFullYear(startDate.getFullYear() + 10);
startDate.setSeconds(startDate.getSeconds() + 1);

console.log(startDate);


// Needed Output
// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"
console.log("======================")
// ================== assignment 3 =======================
let DateLastMonth = new Date();
DateLastMonth.setDate(0);
// DateLastMonth.setTime(0);
console.log(DateLastMonth)
let months=["Jan","Feb","March","April","May","june","july","August","Sept","Oct","November","December"]
console.log(`Previous Month Is ${months[DateLastMonth.getMonth()]} And Last Day Is ${DateLastMonth.getDate()}`)
// Needed Output
// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"
console.log("======================");
// ================== assignment 4 =======================
let birthDate1 = new Date('2002-05-15T00:00:00');

let birthDate2 = new Date(2002,4,15,0,0,0);

let birthDate3 = new Date(Date.UTC(2002,4,15,0,0,0)); 
let localDate = new Date(birthDate3.getTime() + birthDate3.getTimezoneOffset() * 60000);



console.log(birthDate1);
console.log(birthDate2);
console.log(localDate);

// Needed Output

// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"

console.log("======================");

