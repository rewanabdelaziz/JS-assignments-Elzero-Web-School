// ======================== Task 1 =======================
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(myFriends.indexOf("Ahmed"),num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.pop()
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// ======================== Task 2 =======================
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.pop()
friends.shift()
console.log(friends); // ["Eman", "Osama"]

// ======================== Task 3 =======================
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

// solution 1 
// finalArr=finalArr.concat(arrTwo.pop(),arrOne.reverse(),arrTwo.reverse())
// console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"] 

// another solution
finalArr=finalArr.concat(arrOne,arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"] 

// ======================== Task 4 =======================
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[words.length-1][0].slice(website.length).toUpperCase()); // ZERO

// ======================== Task 5 =======================
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

//first
if (haystack.includes(needle)){
    console.log("found");
}

//second
// we can make it use loop but until this lesson ,the loop not explained
if (needle===haystack[0]){
    console.log("found");
}else if (needle===haystack[1]){
    console.log("found");
}else if (needle===haystack[2]){
    console.log("found");
}else{
    console.log("not found");
}

//third
if (haystack.indexOf(needle)){
    console.log("found");
}
// ======================== Task 6 =======================
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
// solution 1
// allArrs=arr2[arr1.length-1].concat(arr1.pop(),arr2.pop()).toLowerCase()
// another solution
allArrs=arr2.slice(arr1.length-1).concat(arr1.pop()).sort().join("").toLowerCase();
console.log(allArrs); // fxy