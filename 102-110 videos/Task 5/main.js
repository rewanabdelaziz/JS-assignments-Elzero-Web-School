let div=document.querySelector("div");
div.style.cssText="font-Size:200px;";
function countDown(){
    div.innerHTML-=1;
    if(div.innerHTML=="5"){
        popup();
    }
    if(div.innerHTML == "0"){
        clearInterval(counter);
    }
}
function popup(){
    window.open("https://elzero.org","_blank","width=600,height=400,top=200,left=500")
}
let counter=setInterval(countDown,1000)