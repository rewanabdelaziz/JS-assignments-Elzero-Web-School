// ======================= Task 1 =======================
// Replace ? With Arithmetic Operators
console.log(10 * 20 * 15 % 3 + 190 % 10 * 400); // 0

// ======================= Task 2 =======================
let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num + (true + true + true)); // 6

// Soultion Three
console.log(num**num - num*num - num*num -num); // 6

// Soultion Four
console.log(num + num*num - num -num ); // 6

// Solution Five
console.log(num++ + --num); // 6

// Solution Six
console.log(num * num - num); // 6

// ======================= Task 3 =======================
let num2 = "10";

// Solution One
console.log(+num2 + +num2); // 20

// Solution Two
console.log(num2 *num2 % num2 + +num2 + +num2); // 20

// Solution Three
console.log(num2 * --num2 / num2 + ++num2); // 20    

// Solution Four
console.log(num2++ + --num2); // 20

// Solution Five
console.log(+num2 * (true+true)); // 20

// ======================= Task 4 =======================
let points = 10;

// Write Your Code Here
points +=true + true + true;
console.log(points); // 13

// Write Your Code Here
points -=true + true + true + true + true;
console.log(points); // 8;