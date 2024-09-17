// ================================ Task 1 =============================
let start = 10;
let end = 100;
let exclude = 40;
let i;
for(i=start ; i <= end ; i+= start){
    if (i === exclude) continue;
    console.log(i);
}
// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100

// ================================ Task 2 =============================
let start2 = 10;
let end2 = 0;
let stop = 3;
let j;

for(j=start2 ; j > end2 ; j--){
    if(j<10){
        console.log(`0${j}`);
    }else{
    console.log(`${j}`);
    }
    if (j === stop) break;
}

// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03

// ================================ Task 3 =============================
let start3 = 1;
let end3 = 6;
let breaker = 2;
let stop3 = end3 - breaker;

for(let k=start3 ; k <= end3 ; k++){
    console.log(k);
    for(let l=breaker;l <= stop3; l++){
        if (l===breaker +1 ) continue;
        console.log(`-- ${l}`)
    }
}

// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4

// ================================ Task 4 =============================
let index = 10;
let jump = 2;

for (;;) {
    if(index<=2) break;
    console.log(index);
    index-=jump;
}

// Output
// 10
// 8
// 6
// 4
// ================================ Task 5 =============================

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let count=letter.length;
for( let c=letter.length -1 ; c < friends.length ; c++){
    if(friends[c][letter.length -1].toLowerCase() === letter) continue;
    console.log(`${count} => ${friends[c]}`);
    count++;
}
// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"

// ================================ Task 6 =============================
let start6 = 0;
let swappedName = "elZerO";
let result="";
for( ; start6 < swappedName.length ; start6++){
    if(swappedName[start6] === swappedName[start6].toLocaleLowerCase()){
        result+=swappedName[start6].toLocaleUpperCase()
    }else{
        result+=swappedName[start6].toLocaleLowerCase()
    }
}
console.log(result);

// Output
// "ELzERo"

// ================================ Task 7 =============================
let start7 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
for( ; start7 < mix.length;start7++){
    if (mix[start7] == true) continue;
    if (typeof mix[start7] == "number"){
        console.log(mix[start7]);
    }
}
// Output
// 2
// 3
// 4