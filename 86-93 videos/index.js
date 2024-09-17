// ==================== Task 1 ===========================
console.log(document.getElementById("elzero"))
console.log(document.getElementsByClassName("element")[0]);
console.log(document.getElementsByName("js")[0]);
console.log(document.getElementsByTagName("div")[0]);
console.log(document.querySelector("div"));
console.log(document.querySelector("#elzero"));
console.log(document.querySelector(".element"));
console.log(document.querySelector("[name='js']"));
console.log(document.querySelectorAll("div")[0]);
console.log(document.querySelectorAll("#elzero")[0]);
console.log(document.querySelectorAll("[name='js']")[0]);
console.log(document.querySelectorAll(".element")[0]);
console.log(document.body.firstElementChild);
console.log(document.body.children[0]);
console.log(document.body.childNodes[3]);
// ==================== Task 2 ===========================
for (let i =0; i < document.images.length ;i++){
    document.images[i].src="https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
    document.images[i].alt="Elzero logo";
}
// ==================== Task 3 ===========================
let input=document.forms[0].dollar;   //dollar is name of the input
let output= document.getElementsByClassName("result")[0];
input.oninput=function(){
    output.innerText=`{${input.value}} USD Dollar = {${(input.value*48.6).toFixed(2)}} Egyptian Pound`
}
// ==================== Task 4 ===========================
let one =document.querySelector(".one");
let two =document.querySelector(".two");
let titleOne=one.title;
let textOne=one.innerText;
one.title=two.title;
one.innerText=two.innerText;
two.title=titleOne;
two.innerText=`${textOne}${two.attributes.length}`;
// console.log(one)
// console.log(two)
// ==================== Task 5 ===========================
for (let i=10 ; i < 15 ; i++){
    let image=document.images[i];
    if(image.hasAttribute("alt")){
        image.alt="Old";
    }else{
        image.alt="Elzero new";
    }
}
// ==================== Task 6 ===========================
let result = document.querySelector(".results");
document.forms[1].onsubmit=function(event){
event.preventDefault();
let num = document.querySelector(".task6 input[type=number]").value;
let text = document.querySelector(".task6 input[type=text]").value;
let type = document.querySelector(".task6 select").value;
result.innerHTML="";
for(let i=0 ; i< +num ; i++){
    let div=document.createElement(type);
    let divText=document.createElement("p");
    divText.textContent=text;
    div.appendChild(divText);
    result.appendChild(div)
}

}
