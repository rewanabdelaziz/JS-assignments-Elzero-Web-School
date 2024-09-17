// =============== challenge 1 =====================
let names = function (...n){
    return `String [${n.join("], [")}] => Done !`
};
console.log(names("Osama","Mohamed","Ali","Ibrahim"));

// convert to arrow function
let names2 = (...n) => `String [${n.join("], [")}] => Done !`;
console.log(names2("Osama","Mohamed","Ali","Ibrahim"));

// =============== challenge 2 =====================

let myNumbers =[20, 50, 10, 60];

let calc =(one, two, ...nums) => one + two + nums.pop();

console.log(calc(10, myNumbers[+!(Array.isArray(myNumbers))], myNumbers[+(Array.isArray(myNumbers))])); //80

//  regular syntax
function calc2 (one, two, ...nums){
        return one + two + nums.pop();
}
console.log(calc2(10, myNumbers[+!(Array.isArray(myNumbers))], myNumbers[+(Array.isArray(myNumbers))])); //80
