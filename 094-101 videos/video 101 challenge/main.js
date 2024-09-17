// header
let header = document.createElement("header");
header.className="header";
header.style.cssText="display:flex; align-items:center; justify-content:space-between; padding:10px 20px;";

// logo
let logo=document.createElement("div");
logo.className="logo";
let logoTxt=document.createElement("span");
logoTxt.innerText="ElZero";
logoTxt.style.color="rgb(35, 169, 110)";
logoTxt.style.fontSize="27px";
logoTxt.style.fontWeight="bolder";
logo.appendChild(logoTxt);
header.appendChild(logo);
// navBar
let list=document.createElement("ul");
list.className="nav";
let list1=document.createElement("li");
let list2=document.createElement("li");
let list3=document.createElement("li");
let list4=document.createElement("li");
list1.innerHTML="Home";
list2.innerHTML="About";
list3.innerHTML="Service";
list4.innerHTML="Contact";
list.style.cssText="display:flex; list-style:none; justify-content:space-between; gap:10px;";
list.style.justifyContent="space-between"
list.appendChild(list1);
list.appendChild(list2);
list.appendChild(list3);
list.appendChild(list4);
header.appendChild(list);
// document.body.prepend(header);

// products
let container=document.createElement("div");
container.className="content";
container.style.cssText="display:flex; align-items:center; justify-content:space-evenly; align-content:space-around; flex-wrap:wrap; background-color:rgb(236, 236, 236); padding:10px 20px; min-height:80vh"
for(let i=1 ; i <= 15 ; i++){
    let product=document.createElement("div");
    product.className="product";
    let count=document.createElement("span");
    count.style.cssText="font-size:30px;"
    count.innerText=`${i}`
    product.appendChild(count);
    count.after("Product");
    container.appendChild(product);
    product.style.cssText="width:400px; height:100px; display:flex; flex-direction:column; justify-content:center; align-items: center; background-color:white;"
}
// document.body.append(container);

//footer
let footer=document.createElement("footer");
footer.className="footer"
footer.innerHTML=`<span>Copyright 2023</spen>`;
footer.style.cssText="background-color:rgb(35, 169, 110); color:white; text-align:center; padding:20px;"
// add to page
document.body.prepend(footer);
document.body.prepend(container);
document.body.prepend(header);