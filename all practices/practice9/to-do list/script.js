let enterButton = document.getElementById("enter");
let input = document.getElementById("userInput");
let ulList = document.querySelector("ul");
let item = document.getElementsByTagName("li");

function inputLength(){
    return input.value.length;
}



function createListElement() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ulList.appendChild(li);
    input.value = "";


    let dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("-"));
    li.appendChild(dBtn);


    function addToDone() {
        li.classList.toggle("done");
    }

    li.addEventListener("click",addToDone);

    function deleteListItem(){
        li.classList.add("delete")
    }

    dBtn.addEventListener("click", deleteListItem);
}


function addListAfterClick(){
    if (inputLength() > 0) {
        createListElement();
    }
}



enterButton.addEventListener("click",addListAfterClick);

