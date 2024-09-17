// ================================= Task 1 ===============================
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// solution1

// let solution1=mix.map(function(ele){
//     return isNaN(parseInt(ele)) ? ele : "" // remove numbers 
// }).reduce(function(acc,current){
//     return `${acc}${current}`
// });

// solution 2

let solution1=mix.map(function(ele){
    return isNaN(parseInt(ele)) ? ele : "" // remove numbers 
}).join("");

console.log(solution1); // Elzero


// ================================= Task 2 ===============================
let myString = "EElllzzzzzzzeroo";

// solution1

// let solution2=myString.split("").filter(function (ele , index){
//     // console.log(myString.indexOf(ele));
//     // console.log(index);
//     // console.log("======")
//     return myString.indexOf(ele) === index;
// }).join("")

// another solution
let solution2 = myString.split('').reduce((acc, current) => {
    if (!acc.includes(current)) {
        acc += current;
    }
    return acc;
}, '');
console.log(solution2); // Elzero


// ================================= Task 3 ===============================
let myArray = ["E", "l", "z", ["e", "r"], "o"];
let solution3=myArray.reduce(function(acc, curr){
    if(Array.isArray(curr)){
        let arrConcat="";
        for(let i=0; i< curr.length ; i++){
            arrConcat=arrConcat.concat(curr[i]);
        }
        return acc.concat(arrConcat);
    }else{
        return acc.concat(curr);//`${acc}${curr}`
    }
})


console.log(solution3); // Elzero



// ================================= Task 4 ===============================
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let solution4=numsAndStrings.filter(function(ele){
    return !isNaN(parseInt(ele)) // remove numbers 
}).map(function(ele){
    return -ele
});
console.log(solution4);// [-1, -10, 10, 20, -5, -3]



// ================================= Task 5 ===============================
let nums = [2, 12, 11, 5, 10, 1, 99];
let solution5=nums.reduce(function(acc,curr){
    return curr % 2 === 0 ? acc*=curr : acc+=curr
},1)
console.log(solution5);// 500