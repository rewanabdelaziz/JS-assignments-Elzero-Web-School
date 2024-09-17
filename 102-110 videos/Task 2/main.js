let parent = document.createElement("div");
let heading = document.createElement("h1");
let text = document.createElement("p");
let btn = document.createElement("button");

function popup(){
    heading.textContent = "Welcome";
    text.textContent = "Welcome To Alghanem Web Study";
    btn.textContent = "X";

    parent.append(heading, text, btn);
    document.body.append(parent);

    btn.addEventListener("click", function(){
        btn.parentElement.remove();
    });

    document.body.style.cssText = "font-family: arial, Tahoma";
    parent.style.cssText = "background-color: #eee; border: 1px solid #ccc; padding 20px; text-align: center; position: relative; width: 350px; height: 150px; margin: 20px auto;";
    btn.style.cssText = "background-color: red; color: white; font-weight: bold; border: none; width: 30px; height: 30px; border-radius: 50%; position: absolute; top: -10px; right: -10px"
}
setTimeout(popup, 5000);