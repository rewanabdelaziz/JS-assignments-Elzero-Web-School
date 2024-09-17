let font =document.querySelector("#fonts");
let color =document.querySelector("#colors");
let size =document.querySelector("#size");
let text=document.querySelector(".text");
text.style.cssText=`color:${color.value}; font-size:${size.value}px; font_family:${font.value};`;

font.onchange =function (){
    localStorage.setItem("font", font.value);
    text.style.fontFamily=`${font.value}`
}
color.onchange =function (){
    localStorage.setItem("color", color.value);
    text.style.color=`${color.value}`
}
size.onchange =function (){
    localStorage.setItem("size", size.value);
    text.style.fontSize=`${size.value}px`
}
if (window.localStorage.getItem("color")) {
    text.style.color=window.localStorage.getItem("color");
    color.value=window.localStorage.getItem("color");
}
if (window.localStorage.getItem("size")) {
    text.style.fontSize=`${window.localStorage.getItem("size")}px`;
    size.value=window.localStorage.getItem("size");
}
if (window.localStorage.getItem("font")) {
    text.style.fontFamily=window.localStorage.getItem("font");
    font.value=window.localStorage.getItem("font");
}