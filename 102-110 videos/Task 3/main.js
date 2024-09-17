let div=document.querySelector("div");
div.style.cssText="font-Size:200px;";
function countDown(){
    div.innerHTML-=1;
    if(div.innerHTML == "0"){
        clearInterval(counter);
    }
}
let counter=setInterval(countDown,1000)