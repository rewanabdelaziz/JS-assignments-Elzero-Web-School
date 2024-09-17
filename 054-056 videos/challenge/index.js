let myAdmins = ["Ahmed", "Osama" ,"Sayed" , "Stop" , "Samera"];
let myEmployees = ["Amgad" , "Samah","Ameer","Omar","Othman", "Amany", "Samia"];

let adminsCounter=0;
let admins=[];
for(let i=0 ; i < myAdmins.length ; i++){
    if(myAdmins[i].toLowerCase()==="stop"){
        break;
    }
    admins.push(myAdmins[i]);
}
document.write(`<div>We Have ${admins.length} Admins</div>`);

let employeesCounter;
for(let i=0 ; i < admins.length ; i++){
    document.write(`<hr><div><p>The Admin For Team ${i+1} is ${admins[i]}</p>`);
    document.write("<h3>Team Members:</h3>");
    employeesCounter=0;
    for(let j=0 ; j < myEmployees.length ; j++){
        if(admins[i][0].toLowerCase()===myEmployees[j][0].toLowerCase()){
            employeesCounter++;
            document.write(`<p>- ${employeesCounter} ${myEmployees[j]}</p>`);
        }
    }
    document.write("</div>")
}