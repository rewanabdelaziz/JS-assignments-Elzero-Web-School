let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

my=my.slice(zero,-(--counter)).reverse();   // counter=2
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(++zero,++counter)); // ["Elham", "Mazero"]

// zero =1    counter =3 
console.log(my[zero].slice(--zero,--counter)+my[counter].slice(counter)); // "Elzero"

// zero =0   counter =2 
console.log(my[counter].slice(-(counter),-(--counter))+my[zero].slice(zero,counter)); // "rO"