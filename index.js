

function nav () {
const open = document.getElementById("n");
const close = document.getElementById("nn");
const nav1 = document.getElementById("nnn");

open.addEventListener("click",function(){
    nav1.style.display = "block";
    close.style.display = "block";
    open.style.display = "none";
})

close.addEventListener("click", function(){

    nav1.style.display = "none";
    close.style.display = "none";
    open.style.display = "block";

})

}
nav();








