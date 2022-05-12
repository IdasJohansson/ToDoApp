
const form = document.getElementById("new-task-form"); 
const input = document.getElementById("new-task-input"); 
const tasks = document.getElementById("tasks"); 



// getTasks
const getTasks = () => {
    let allTasks = localStorage.getItem("taskList");
    allTasks = allTasks.split(",");
    console.log(allTasks);
    if(allTasks != "")
    {
        tasks.innerHTML = allTasks.map(
        (task, index) => 
        `
        <div class="task">
        <div class="content">
        <input class="text" type="text" readonly="readonly" value="${task}">
        </div>
        <div class="actions">
        <button class="delete" onclick="deleteTask(${index})">Delete</button>
        </div>
        </div>
        ` 
        )
        .join("");
    }else {
        tasks.innerHTML =   ` <div class="no-tasks-found"> 
        <h2>No tasks found ... :(</h2></div>  `
    }
};


// task, index = element och index :) 




// addTask
const addTask = (task) => {
    let allTasks = localStorage.getItem("taskList"); 
    allTasks = allTasks ? allTasks.split(",") : []; 
    allTasks.push(task); 
    localStorage.setItem("taskList", allTasks); 
}; 

//deleteTask
const deleteTask = (index) => {
    let allTasks = localStorage.getItem("taskList"); // Hämtar alla element i localstorage
    allTasks = allTasks.split(",")
    allTasks.splice(index,1); // Tar bort element vid specifikt index
    localStorage.setItem("taskList", allTasks); // Sparar alla element till localStorage
    getTasks(); 
}


// Forms submit
form.onsubmit = (event) => {
    event.preventDefault(); // förhindrar ett agerande
    let task = input.value;
    addTask(task); 
    getTasks(); 
    form.reset(); 
}

window.onload = getTasks; 

