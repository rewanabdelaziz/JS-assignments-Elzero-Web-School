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

let startDate = new Date('1970-01-01T00:00:00');

startDate.setFullYear(startDate.getFullYear() + 10);

startDate.setSeconds(startDate.getSeconds() + 1);
console.log(startDate);


// Needed Output
// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"
console.log("======================")
// ================== assignment 3 =======================
let DateNow2 = new Date();
let DateLastMonth = new Date(DateNow2.setDate(0))
console.log(DateLastMonth)
let LastMonths;
switch (DateLastMonth.getMonth()){
    case 0:
        LastMonths="Jan";
        break;
    case 1:
        LastMonths="Feb";
        break;
    case 2:
        LastMonths="March";
        break;
    case 3:
        LastMonths="April";
        break;
    case 4:
        LastMonths="May";
        break;
    case 5:
        LastMonths="june";
        break;
    case 6:
        LastMonths="july";
        break;
    case 7:
        LastMonths="August";
        break;
    case 8:
        LastMonths="Sep";
        break;
    case 9:
        LastMonths="Oct";
        break;
    case 10:
        LastMonths="November";
        break;
    case 11:
        LastMonths="December";
        break;

}
console.log(`Previous Month Is ${LastMonths} And Last Day Is ${DateLastMonth.getDate()}`)
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

