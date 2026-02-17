let btn1 = document.querySelector("#applybutton");
btn1.addEventListener("click",function(event){
    alert("Searching for the job");
    event.preventDefault();
});

let btn2 = document.querySelector("#applyy");
btn2.addEventListener("click",function(event){
    event.preventDefault();
    alert("Applied");
    btn2.innerHTML="Applied";
    
});



