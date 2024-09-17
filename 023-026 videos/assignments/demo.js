// ===================== Task 1 ==================================
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1_00_000); // 100000
console.log(1e5); // 100000
console.log(parseInt("100000")); // 100000
console.log(Number("100000")); // 100000
console.log(Number(100000.1360.toFixed())); // 100000
console.log(Math.round(100000.15)); // 100000
console.log(Math.ceil(99999.12)); // 100000
console.log(Math.floor(100000.999)); // 100000
console.log(Math.trunc(100000.167)); // 100000
console.log(10**5); // 100000

// ===================== Task 2 ==================================
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

// ===================== Task 3 ==================================
console.log(`${Number.MAX_SAFE_INTEGER}`.length ); // 16

// ===================== Task 4 ==================================
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57

// ===================== Task 5 ==================================
let num = 10;

console.log(Number.isInteger(num) +Number.isInteger(num)); // 2

// ===================== Task 6 ==================================
let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Number(flt.toFixed())); // 10
console.log(parseInt(flt)); // 10

// ===================== Task 7 ==================================
console.log(Math.floor(Math.random() * (4 - 0 + 1) + 0)); // 0 || 1 || 2 || 3 || 4