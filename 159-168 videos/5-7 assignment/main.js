// ================== assignment 5 =======================
const start = performance.now();
for (let i = 1; i <= 99999; i++) {
    // to try it uncomment next line
    // console.log(i);     
}

const end = performance.now();

const timeTaken = Math.floor(end - start); 

console.log(`Loop Took ${timeTaken} Milliseconds.`);

// Needed Output
// "Loop Took 1921 Milliseconds."
console.log("========================")
// ================== assignment 6 =======================

// Write Your Generator Function Here
function* gen() {
    let base = 14; 
    let increment = 140; 
    let incrementStep = 200; 
    
    while (true) { 
        yield base; 
        
        base += increment; 
        increment += incrementStep; 
    }
}

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}
console.log("========================")
// ================== assignment 7 =======================
function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
    function* genLetters() {
    }
    yield* ["A", "B", "B", "B", "C", "D"];
}

function* genAll() {
    const seen = new Set();
    

    for (const value of genNumbers()) {
        if (!seen.has(value)) {
            seen.add(value);
            yield value;
        }
    }
    
    for (const value of genLetters()) {
        if (!seen.has(value)) {
            seen.add(value);
            yield value;
    }
    }
}

let generator2 = genAll();

console.log(generator2.next()); // {value: 1, done: false}
console.log(generator2.next()); // {value: 2, done: false}
console.log(generator2.next()); // {value: 3, done: false}
console.log(generator2.next()); // {value: 4, done: false}
console.log(generator2.next()); // {value: 5, done: false}
console.log(generator2.next()); // {value: "A", done: false}
console.log(generator2.next()); // {value: "B", done: false}
console.log(generator2.next()); // {value: "C", done: false}
console.log(generator2.next()); // {value: "D", done: false}