document.addEventListener("DOMContentLoad",function(){
    const button=document.getElementById("login");
    button.addEventListener("click",function(){
        document.getElementById("demo").innerHTML="hello java"
        });
    });
let data1 = "to";
let data2 = "JS";
let data =`welcome ${data1} ${data2}`
document.getElementById("intro").innerHTML = data;
document.getElementById("currenttime").innerHTML = date();