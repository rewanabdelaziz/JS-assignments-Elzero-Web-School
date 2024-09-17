let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
while(index < friends.length  ){
    if(typeof friends[index]==="number"){
        index++;
        continue;
    }else if(friends[index].toLowerCase().startsWith('a')){
        index++;
        continue;
    }else{
        ++counter;
        console.log(`${counter} => ${friends[index]}`);
        index++;
    }
    
}
// Output
// "1 => Sayed"
// "2 => Mahmoud"