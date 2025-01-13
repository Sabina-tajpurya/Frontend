document.getElementById("push").addEventListener("click",function(){
    const inputfield= document.querySelector("#newtask input")
    //vaidation input field
    if(inputfield.value.length===0){
        alert("please input task");
        return;
    }
    //add newtask
    const taskcontainer=document.querySelector("#tasks");
    taskcontainer.innerHTML +=`
    <div class="task">
    <span id="taskname">${inputfield.value}</span>
    <button class="delete">
    <i class="fa-solid fa-trash"></i>
    </button>
    </div>`

    // remove task
    const deleteButtons = document.querySelectorAll('.delete');
    deleteButtons.forEach((button)=>{
        button.onclick = function(){
            this.parentNode.remove();
        }
    })
    //complete task
    const tasks=document.querySelectorAll(".task");
    tasks.forEach((task)=>{
    task.onclick=function(){
        this.classList.toggle("complete")
    }
})
});