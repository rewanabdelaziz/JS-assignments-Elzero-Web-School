let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,1,2,0,Z";

let solution=myString.split(",").filter(function(ele){
    return isNaN(parseInt(ele)) && (ele != myString[--myString.length])  // remove numbers 
}).map(function(ele){
    return ele == "_"? " " : ele.split("",+true).join(""); // return only one char and replace _ with " "
}).reduce(function(acc,current){
    return `${acc}${current}`
});

console.log(solution); // Elzero Web School
