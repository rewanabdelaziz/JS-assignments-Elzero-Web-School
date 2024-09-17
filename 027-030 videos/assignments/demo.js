//  ====================== Task 1 ========================
let userName = "Elzero";
console.log(userName.toLowerCase().split("",1).toString()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
console.log(userName.substr(0,1).toLowerCase()); // e
console.log(userName[0].repeat(3).toLowerCase()); // eee

//   ====================== Task 2 ========================
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.toLowerCase().startsWith(letterE)); // True
console.log(word.endsWith(letterO.toLowerCase())); // True