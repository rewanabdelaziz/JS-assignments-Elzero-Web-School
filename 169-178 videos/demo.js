let articlesRequest = new XMLHttpRequest();
articlesRequest.open("Get","articles.json") //async true as default
articlesRequest.send()
console.log(articlesRequest)
articlesRequest.onreadystatechange=function(){
    if(this.readyState ==4 && this.status == 200){
        console.log(this.responseText);
        console.log("Data Loaded");

        // assignmet 3
        let mainData=JSON.parse(this.responseText);
        for(i=0 ; i <mainData.length ; i++){
            mainData[i].section ="All"
        }
        console.log(mainData);
        let updatedData =JSON.stringify(mainData);
        console.log(updatedData);   //this will be a string
        // console.log(updatedData.length);

        // assignment 4
        let mainDiv=document.createElement("div");
        mainDiv.id="data"
        document.body.prepend(mainDiv);
        for(i=0; i<mainData.length ; i++){
            // console.log(mainData[i])
            let articleDiv=document.createElement("div");
            articleDiv.innerHTML=`<h2>${mainData[i].title}</h2><p>${mainData[i].content}</p><p>Author: ${mainData[i].author}</p><p>Category: ${mainData[i].section}</p>`
            mainDiv.appendChild(articleDiv)
        }
    }

    

}