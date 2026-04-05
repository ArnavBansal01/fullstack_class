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

const taskInput = document.getElementById("taskInput");
const priority = document.getElementById("priority");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

let tasks = [];

addTask.addEventListener("click", function() {

    const taskName = taskInput.value;

    const task = {
        name: taskName,
        priority: priority.value,
        completed: false
    };

    tasks.push(task);

    displayTasks(tasks);

    taskInput.value = "";
});


function displayTasks(taskArray){

    taskList.innerHTML = "";

    taskArray.forEach(function(task, index){

        const li = document.createElement("li");

        li.innerHTML = `
        <input type="checkbox" ${task.completed ? "checked":""}>
        ${task.name} (${task.priority})
        <button onclick="deleteTask(${index})">Delete</button>
        `;

        const checkbox = li.querySelector("input");

        checkbox.addEventListener("change", function(){
            task.completed = checkbox.checked;
        });

        taskList.appendChild(li);

    });

}

function deleteTask(index){

    tasks.splice(index,1);

    displayTasks(tasks);

}


document.getElementById("completed").addEventListener("click", function(){

    const completedTasks = tasks.filter(function(task){
        return task.completed;
    });

    displayTasks(completedTasks);

});


document.getElementById("pending").addEventListener("click", function(){

    const pendingTasks = tasks.filter(function(task){
        return !task.completed;
    });

    displayTasks(pendingTasks);

});


document.getElementById("all").addEventListener("click", function(){

    displayTasks(tasks);

}); 