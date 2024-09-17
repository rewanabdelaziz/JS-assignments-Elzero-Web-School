// ================== assignment 1 ====================
console.log("===== task 1 =======");
// function Car(name, model, price) {
//     this.n = name;
//     this.m = model;
//     this.p = price;
// }

// class syntax
class Car{
    constructor(name, model, price){
        this.n = name;
        this.m = model;
        this.p = price;
    }
    run(){
        return "Car Is Running Now";
    }

    stop(){
        return "Car Is Stopped";
    }
}
let carOne= new Car("MG",2022,420000);
let carTwo= new Car("MG",2022,420000);
let carThree= new Car("MG",2022,420000);
console.log(`Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}"`);
console.log(carOne.run());

// Needed Output
//"Car One Name Is MG And Model Is 2022 And Price Is 420000"
//"Car Is Running Now"


// ================== assignment 2 ====================
console.log("===== task 2 =======");
class Phone {
    constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
    }
}

class Tablet extends Phone {
    constructor(name,serial,price,size){
        super(name,serial,price);
        this.size=size || "UnKnown";
    }
    fullDetails(){
        return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`
    }
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown


// ================== assignment 3 ====================
console.log("===== task 3 =======");
// Edit The Class
class User {
    #c
    constructor(username, card) {
    this.u = username;
    this.#c = card.toString().replace(/(\d{4})(?=\d)/g, '$1-');
    }
    get showData(){
        return `Hello ${this.u} Your Credit Card Number Is ${this.#c}`
    }
    // the get keyword is used to define a getter method for an object , used when you want to compute or transform a value when a property is accessed.
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined



// Notes about regular expression and the replace function in the solve of the assignment 3

// 1. Regular Expression (/(\d{4})(?=\d)/g)
//     / ... /g: This is the regular expression pattern. The g at the end is a flag that stands for "global," meaning it will search the entire string and replace all matches (not just the first match).
//     \d{4}: This matches exactly 4 digits.
//     \d is a shorthand for any digit (0-9).
//     {4} specifies exactly 4 occurrences.
//     (...): The parentheses around \d{4} create a capturing group. This allows us to reference the matched 4 digits later in the replacement part.
//     (?=\d): This is a lookahead assertion. It ensures that the match (4 digits) is followed by at least one more digit (\d), but it doesn't include that extra digit in the match. This prevents adding a hyphen at the very end of the string where there’s no more digits after the last group of 4.
// 2. Replacement Part ('$1-')
//    '$1-': The $1 refers to the first capturing group, which is the 4 digits matched by (\d{4}). The - is the hyphen that gets added after the 4 digits.
//    So, each time a group of 4 digits is found, it is replaced by itself (via $1) followed by a hyphen.

// ================== assignment 4 ====================
console.log("===== task 4 =======");


String.prototype.addLove=function(){
    return `I Love ${myStr} Web School`
}

// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School

// ================== assignment 5 ====================
console.log("===== task 5 =======");

const myObj = {
    username: "Elzero",
    id: 100,
    score: 1000,
    country: "Egypt",
};

Object.defineProperties(myObj,{
    id:{
        enumerable:false,
    },
    score:{
        writable:false,
    }
});
delete myObj.country;


myObj.score = 500;

for (let prop in myObj) {
    console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output

// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}