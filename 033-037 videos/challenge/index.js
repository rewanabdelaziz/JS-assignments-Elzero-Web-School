// ===================== challenge 1  ===================
let a =10;
if (a < 10){
    console.log(10);
}else if (a >= 10 && a<= 40){
    console.log("10 To 40");
} else if (a > 40){
    console.log("> 40");
}else {
    console.log("unKnown");
}
// using Ternary
a < 10 
? console.log(10) 
: a >= 10 && a<= 40
? console.log("10 To 40")
: a > 40
? console.log("> 40")
: console.log("unKnown")
// ===================== challenge 2  ===================
let st = "Elzero Web School";

if (st.toLowerCase().charAt(st.toLowerCase().indexOf("w")) === "w") {
    console.log("Good");
}

if (typeof st.slice !== "string") {
    console.log("Good");
}

if (typeof st.length === "number") {
    console.log("Good");
}
if (st.substring(0,6).repeat(2) === "ElzeroElzero") {
    console.log("Good");
}