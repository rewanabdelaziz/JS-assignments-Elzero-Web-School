let assignment1Section=document.createElement('section');
let assignment2Section=document.createElement('section');
let hr=document.createElement('hr')
// =========================== assignment 1 ==========================
let myPromise = new Promise((resolveFun , rejectFun) =>{
    let xhr= new XMLHttpRequest();
    xhr.open("GET",'articles.json');
    xhr.send();
    xhr.onload=function(){
        if(this.readyState === 4 && this.status === 200){
            let myarticles = JSON.parse(this.responseText);
            resolveFun(myarticles);
        }else{
            rejectFun(Error("can't find articles"));
        }
    }
    
}).then((finalArticles) =>{
    finalArticles.length=5;
    return finalArticles;
}).then((finalArticles) =>{
    for(let i=0 ; i< finalArticles.length ; i++){
        let div=document.createElement('div');
        let title=document.createElement('h3');
        let description=document.createElement('p');
        title.textContent=finalArticles[i].title;
        description.textContent=finalArticles[i].description;
        div.append(title,description);
        assignment1Section.append(div)
        document.body.appendChild(assignment1Section);
    }
    document.body.appendChild(hr);
});
// =========================== assignment 2 ==========================
fetch('articles.json').then((result) =>{
    return result.json();
}).then((finalArticles) =>{
    finalArticles.length=5;
    return finalArticles;
}).then((finalArticles) =>{
    for(let i=0 ; i< finalArticles.length ; i++){
        let div=document.createElement('div');
        let title=document.createElement('h3');
        let description=document.createElement('p');
        title.textContent=finalArticles[i].title;
        description.textContent=finalArticles[i].description;
        div.append(title,description);
        assignment2Section.append(div);
        document.body.appendChild(assignment2Section);
    }
});


// تم بحمد الله 