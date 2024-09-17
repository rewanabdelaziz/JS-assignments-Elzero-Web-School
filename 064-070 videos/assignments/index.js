// ============================ Task 1 ==========================================
function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        let name=zName.split(" ");
        return `${name[0]} ${name[1][0].toUpperCase()}.`
      // Osama Mohamed => Osama M.
      // Ahmed ali => Ahmed A.
    }
    function ageWithMessage(zAge) {
        let age=zAge.split(" ",1);
        return `Your Age Is ${age[0]}`
      // 38 Is My Age => Your Age Is 38
      // 32 Is The Age => Your Age Is 32
    }
    function countryTwoLetters(zCountry) {
        return `${zCountry.substr(0,2).toUpperCase()}`
      // Egypt => You Live In EG
      // Syria => You Live In SY
    }
    function fullDetails() {
        return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, You Live In ${countryTwoLetters(zCountry)}`
    }
    return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

// ============================ Task 2 ==========================================
function itsMe() {
    return `Iam A Normal Function`;
}
console.log(itsMe()); // Iam A Normal Function

// Arrow function
let itsMe2=() => `Iam A Arrow Function`;
console.log(itsMe2()); // Iam A Arrow Function

// =========================================
function urlCreate(protocol, web, tld) {
    return `${protocol}://www.${web}.${tld}`;
}
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// Arrow function
let urlCreate2 = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate2("https", "elzero", "org")); // https://www.elzero.org


// ============================ Task 3 ==========================================
function checker(zName) {
    return function (status) {
        return function (salary) {
            return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
        };
    };
}
console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

// Arrow function
let checker2 = (zName) =>{
    return (status) => {
        return (salary) => {
            return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
        }
    }
}
console.log(checker2("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker2("Ahmed")("Not Available")()); // Iam Not Avaialble


// ============================ Task 4 ==========================================
function specialMix(...data) {
    let sum=0;
    for(let i=0 ; i < data.length ; i++){
        if(isNaN(parseInt(data[i])) === false){
            sum+=parseInt(data[i]);
        }
    }
    if(sum == 0){
        return "All Is Strings"
    }else{
        return sum;
    }
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
