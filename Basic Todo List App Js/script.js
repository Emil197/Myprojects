const form=document.querySelector("form")
const input=document.querySelector(".input1")
const list=document.querySelector(".list")
const btn=document.querySelector(".button2")

form.addEventListener("submit", addItem);
list.addEventListener("click",deleteItem)
btn.addEventListener("click",allDelete)

function addItem(e){
    e.preventDefault();

    if(input.value==="") {
        alert("Add item PLEASE")
    }
    else {
        const li=document.createElement("li")
        li.className="li"
        li.textContent = input.value;

        const a=document.createElement("a")
        a.className="link"
        a.setAttribute("href","#")
        a.innerHTML="<i class='fa-solid fa-xmark'></i>"
        li.appendChild(a)
        list.appendChild(li)
        input.value=""
        
    }

}
function deleteItem(e){
    if (e.target.className==="fa-solid fa-xmark"){
        e.target.parentElement.parentElement.remove();
        
    }
e.preventDefault()

}

function allDelete(e){
    alert("Are you sure?")

    list.innerHTML=""
    

    
    e.preventDefault()
}

