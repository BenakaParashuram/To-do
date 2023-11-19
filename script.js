let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function () {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let deletebtn = document.createElement("button");
    deletebtn.innerText = "Delete";
    deletebtn.classList.add("delete");


    item.appendChild(deletebtn);
    ul.appendChild(item);
    inp.value="";
});

ul.addEventListener("click",(event)=>{
    if(event.target.nodeName == "BUTTON"){
        let lis = event.target.parentElement;
        lis.remove();
    }
});