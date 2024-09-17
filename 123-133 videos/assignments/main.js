//  ===================== Task 1 ========================

// Needed Output 
// Set(3) {10, 20, 2}
// 2
let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
console.log(Array.from(setOfNumbers).pop());



//  ===================== Task 2 ========================

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

console.log(new Set(myFriends.sort()))

// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']



//  ===================== Task 3 ========================
let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};

let mapInfo = new Map(Object.entries(myInfo))
console.log(mapInfo)
console.log(mapInfo.size)
console.log(mapInfo.has("role"));

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true



//  ===================== Task 4 ========================

let theNumber = 100020003000;

console.log(+[...new Set(theNumber.toString())].sort().slice(true).join(""))
console.log()
// Needed Output
// 123



//  ===================== Task 5 ========================

let theName = "Elzero";

console.log(theName.split(""));
console.log([...theName]);
console.log([...new Set(theName)]);
console.log(Array.from(theName));
console.log(Object.assign([], theName));

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']



//  ===================== Task 6 ========================

let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

function charsOrdering(arr) {
    let chars = [];
    let numbers = [];

    arr.forEach((e) => {
        typeof e === "number" ? numbers.push(e) : chars.push(e);
    });

    let ordered = [...numbers, ...chars];
    // console.log("before",ordered)
    ordered.copyWithin(0, numbers.length, numbers.length + numbers.length );

    console.log(ordered);
}
charsOrdering(chars);  // ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
charsOrdering(["A", "B", "C", 20, "D", "E", 10, 15, 6]);  // ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']
charsOrdering(["Z", "Y", "A", "D", "E", 10, 1]);     // ["Z", "Y", "Z", "Y", "A", "D", "E"]



//  ===================== Task 7 ========================

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log([...numsOne , ...numsTwo]);
console.log(numsOne.concat(numsTwo));
numsOne.push(...numsTwo)
console.log(numsOne);
// Needed Output
// [1, 2, 3, 4, 5, 6]