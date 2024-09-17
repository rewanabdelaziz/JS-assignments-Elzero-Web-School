// =============================== Task 1 ===================
function sayHello(theName, theGender) {
    if(theGender === "Female"){
        console.log(`Hello Miss ${theName}`);
    }else if(theGender === "Male"){
        console.log(`Hello Mr ${theName}`);
    }else{
        console.log(`Hello ${theName}`);
    }
}
  // Needed Output
  sayHello("Osama", "Male"); // "Hello Mr Osama"
  sayHello("Eman", "Female"); // "Hello Miss Eman"
  sayHello("Sameh"); // "Hello Sameh"

// =============================== Task 2 ===================
function calculate(firstNum, secondNum, operation) {
    if(secondNum === undefined){
        console.log("Second Number Not Found");
    }else{
        if(operation === "subtract"){
            console.log(firstNum - secondNum); 
        }else if(operation === "multiply"){
            console.log(firstNum * secondNum);
        }else{
            console.log(firstNum + secondNum);
        }
    }
}
  // Needed Output
  calculate(20); // Second Number Not Found
  calculate(20, 30); // 50
  calculate(20, 30, 'add'); // 50
  calculate(20, 30, 'subtract'); // -10
  calculate(20, 30, 'multiply'); // 600
// =============================== Task 3 ===================
function ageInTime(theAge) {
    if(theAge >= 100 || theAge <= 10){
        console.log("Age Out Of Range");
    }else{
        console.log(`Age In Months: ${theAge*12} M\nAge In Weeks: ${theAge*12*4} W\nAge In Days: ${theAge*12*4*7} D\nAge In Hours: ${theAge*12*4*7*24} H\nAge In Ments: ${theAge*12*4*7*24*60} men\nAge In Seconds: ${theAge*12*4*7*24*60*60} sec`);
    }
}

  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months

// =============================== Task 4 ===================
// the challenge

// =============================== Task 5 ===================
function createSelectBox(startYear, endYear) {
    document.write("<select>");
    for(startYear; startYear <= endYear; startYear++){
        document.write(`<option value="${startYear}">${startYear}</option>`);
    }
    document.write("</select>");
}
createSelectBox(2000, 2021);
// =============================== Task 6 ===================
function multiply(...numbers){
    let result=1;
    for(let j=0 ; j< numbers.length; j++){
        if(typeof numbers[j] === "number"){
            result*=parseInt(numbers[j]);
        }
    }
    console.log(result);
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
