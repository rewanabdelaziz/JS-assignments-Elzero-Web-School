let name=document.querySelector("#username");
let password=document.querySelector("#password");
let age=document.querySelector("#age");
let country=document.querySelector("#country");

country.onchange =function (){
    sessionStorage.setItem("country", country.value);
}
name.onblur=function(){
    sessionStorage.setItem("name", name.value);
}
password.onblur=function(){
    sessionStorage.setItem("password", password.value);
}
age.onblur=function(){
    sessionStorage.setItem("age", age.value);
}

if(sessionStorage.getItem("country")){
    country.value=sessionStorage.getItem("country");
}
if(sessionStorage.getItem("name")){
    name.value=sessionStorage.getItem("name");
}
if(sessionStorage.getItem("password")){
    password.value=sessionStorage.getItem("password");
}
if(sessionStorage.getItem("age")){
    age.value=sessionStorage.getItem("age");
}



