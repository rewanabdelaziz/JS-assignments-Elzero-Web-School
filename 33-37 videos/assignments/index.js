// ======================= Task 1 =====================
// Test Case 1
let num = 9; // "009"

// Test Case 2
//let num= 20; // "020"

// Test Case 3
//let num = 110; // "110"

if(num < 10){
    console.log(`00${num}`);
}else if (num > 10 && num < 100){
    console.log(`0${num}`); //let num= 20; // "020"
}else if( num >= 100){
    console.log(num);       //let num = 110; // "110"
}
// ======================= Task 2 =====================
let num0 = 9;
let str = "9";
let str2 = "20";
if(num0 == str){
    console.log("{num0} Is The Same Value As {str}");
}
if (num0 == str && num0 !== str){
    console.log("{num0} Is The Same Value As {str} But Not The Same Type");
}
if (num0 != str2 && typeof num0 != typeof str2){
    console.log("{num0} Is Not The Same Value Or The Same Type As {str2}");
}
if (str != str2 && typeof str == typeof str2){
    console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}
// Output
// "{num1} Is The Same Value As {str}"
// "{num1} Is The Same Value As {str} But Not The Same Type"
// "{num1} Is Not The Same Value Or The Same Type As {str2}"
// "{str} Is The Same Type As {str2} But Not The Same Value"

// ======================= Task 3 =====================
let num1 = 10;
let num2 = 30;
let num3 = "30";
if(num3 > num1 && typeof num3 != typeof num2){
    console.log(`${num3} Is Larger Than ${num1} And Type string Not The Same Type As number`)
}
if(num3 > num1 && num3 == num2 && typeof num3 != typeof num2 ){
    console.log(`${num3} Is Larger Than ${num1} And Value Is The Same As ${num2} And Type string Not The Same Type As number`)
}
if(num3 !== num1 && typeof num3 != typeof num2){
    console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}")
}
// Needed Output
// "30 Is Larger Than 10 And Type string Not The Same Type As number"
// "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
// "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"

// ======================= Task 4 =====================
// Edit What You Want Here

let num01 = 15;
let num02 = 10;
let num03 = 15;
let num04 = 41;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num01 > num02) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num01 > num02 && num01 < num04) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num01 > num02 && num01 === num03) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num01 + num02) < num04) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num01 + num03) < num04) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num01 + num02 + num03) < num04) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num04 - (num01 + num03) + num02 === 21) {
  console.log("True");
} else {
  console.log("False");
}