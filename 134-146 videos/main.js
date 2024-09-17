// ==================== Task 1 ==========================
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let ipReg1=/\w{4}:\w{2}\d:((\d{4}:){5})\d{4}/;
let ipReg2=/(\d+|\D+)+/
console.log(ipReg1.test(ip))
console.log(ip.match(ipReg2))
console.log("=".repeat(30));

// ==================== Task 2 ==========================
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
console.log(specialNames.match(/Os(\d)*O/g))
// Output
// ['Os10O', 'OsO', 'Os100O']
console.log("=".repeat(30));


// ==================== Task 3 ==========================
let phone = "+(995)-123 (4567)";

console.log(phone.match(/\+\(\d{3}\)-\d{3}\s\(\d{4}\)/g))
console.log("=".repeat(30));



// ==================== Task 4 ==========================
let reg = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

/*
https?:\/\/: This part matches the protocol portion of the URL. It allows for both http:// and https:// protocols. The ? after s makes s optional, so it matches both http:// and https://.

(?:[-\w]+\.)?: This is a non-capturing group (?:...) that matches the optional subdomain portion of the URL. It allows for a sequence of one or more word characters (\w) or hyphens (-), followed by a dot (.). The ? after the group makes it optional, so it matches URLs both with and without a subdomain.

([-\w]+): This is a capturing group (...) that matches the domain name portion of the URL. It allows for a sequence of one or more word characters or hyphens. The captured domain name will be stored for further use.

\.\w+: This matches the top-level domain portion of the URL. It matches a dot (.) followed by one or more word characters.

(?:\.\w+)?: This is another non-capturing group that matches an optional subdomain of the top-level domain. It allows for an additional dot (.) followed by one or more word characters. The ? after the group makes it optional, so it matches URLs both with and without a subdomain of the top-level domain.

\/?.*: This matches the optional path portion of the URL. It allows for a forward slash (/) followed by any number of characters (.*). The \/? makes the forward slash optional, so it matches URLs both with and without a path.

i: This is a flag that makes the regular expression case-insensitive. It allows for matching URLs regardless of the case of the letters in the protocol, domain, or top-level domain.
*/




// ==================== Task 5 ==========================
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /\d{2}(\/|\s|(\s-\s))\d{2}(\/|\s|(\s-\s))\d{2,4}/g; // Write Pattern Here

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"
console.log("=".repeat(30));



// ==================== Task 6 ==========================
let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let regEx = /((https?)?:?\/{2}?)?(w{3}.)?elzero.org:?(?:\w+\W+\D+\w+\W+\D+)?/g; // Write Your Pattern Here

console.log(url1.match(regEx));
console.log(url2.match(regEx));
console.log(url3.match(regEx));
console.log(url4.match(regEx));
console.log(url5.match(regEx));