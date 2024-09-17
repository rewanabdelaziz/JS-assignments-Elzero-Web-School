let divTitle="Elzero",
    divDescription="Elzero Web School",
    divDate="25/10";
let div=document.createElement("div");
div.className="card"
div.innerHTML=`<h3> Hello ${divTitle}</h3>\
<p>${divDescription}</p>\
<span>${divDate}</span>`
var divClone1 = div.cloneNode(true);
var divClone2 = div.cloneNode(true);
var divClone3 = div.cloneNode(true);
document.body.appendChild(div);
document.body.appendChild(divClone1);
document.body.appendChild(divClone2);
document.body.appendChild(divClone3);