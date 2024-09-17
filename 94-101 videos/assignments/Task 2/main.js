let addInput=document.querySelector(".classes-to-add");
let removeInput=document.querySelector(".classes-to-remove");
let current=document.querySelector(".current");
let list=document.querySelector(".classes-list div");

addInput.onblur=function(){
    if(addInput.value.toLowerCase()!=""){
        let addClasses=addInput.value.toLowerCase().split(" ");
        for(let i=0; i< addClasses.length ; i++){
            current.classList.add(addClasses[i]);
        }
        // console.log(current.classList);
        addInput.value="";
        listAllClasses();
    }
    
}

removeInput.onblur=function(){
    if(removeInput.value.toLowerCase()!=""){
        let removeClasses=removeInput.value.toLowerCase().split(" ");
        for(let i=0; i< removeClasses.length ; i++){
            current.classList.remove(removeClasses[i]);
        }
        // console.log(current.classList);
        removeInput.value=""
        listAllClasses();
    }
    
}
function listAllClasses(){
    let allClasses=Array.from(current.classList); // convert object into an array
    let sortedClasses = allClasses.sort();
    if(sortedClasses.length == 0){
        let p=document.createElement("p");
        p.innerHTML=`No Classes To Show`;
        list.innerHTML="";
        list.appendChild(p);
    }else{
        list.innerHTML="";
        for (let i=0 ; i < sortedClasses.length ; i++){
            let span=document.createElement("span");
            span.innerHTML=`${sortedClasses[i]}`;
            list.appendChild(span);
        }
    }
}
listAllClasses();
