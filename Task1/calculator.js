function clr(){
    document.getElementById("result").value=" ";
}
function display(val){
    document.getElementById("result").value+=val;
}
function solve() { 
    let x = document.getElementById("result").value ;
    let y = eval(x) ;
    document.getElementById("result").value = y ;
} 

function del(){
    document.getElementById("result").value= result.value.toString().slice(0,-1);
}