
var task = document.getElementById("task");
var list = document.getElementById("task_value");
function add(){
    if(task.value === ''){
        alert("Enter your task");
    }
    else{
        let makeli = document.createElement("li");
        makeli.innerHTML = task.value;
        list.appendChild(makeli);
        let span = document.createElement("span");
        span.innerHTML = "✘";
        makeli.appendChild(span);
    }
    task.value = "";
    storage();
}

list.addEventListener("click" , (e) =>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
       
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    storage();
});

window.onload = showList();

function storage(){
    localStorage.setItem("task",list.innerHTML);
}

function showList(){
    list.innerHTML = localStorage.getItem("task");
}  