// ====================== Task 2 ====================
const h1 = document.createElement("h1");
h1.id = "Elzero";
h1.textContent = "Elzero";
h1.style.color = "blue";
h1.style.fontsize="80px";
h1.style.fontWeight= "bold";
h1.style.textAlign= "center";
h1.style.fontFamily= "Arial";
// Append the h1 element to the parent(body)
document.body.appendChild(h1);

// ====================== Task 3 ====================
console.log("%cElzero %cweb %cschool","color:red;font-size:40px;","color:green;font-size:40px;font-weight:bold","color:white;font-size:40px;background-color:blue");

// ====================== Task 4 ====================
console.group("Group 1");
  console.log("Message one");
  console.log("Message two");
  console.group("child Group");
    console.log("Message one");
    console.log("Message two");
    console.group("Grand child Group");
      console.log("Message one");
      console.log("Message two");
      console.groupEnd();
  console.groupEnd();
console.groupEnd();

console.group("Group 2");
  console.log("Message one");
  console.log("Message two");
console.groupEnd();
// ====================== Task 5 ====================
console.table(["Elzero","Ahmed","sameh","Gamal","Aya"]);
// ====================== Task 6 ====================
//console.log("Iam In Console");
//document.write("Iam In Page");
/*
console.log("Iam In Console");
document.write("Iam In Page");
*/