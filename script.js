let tasks = [];

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        tasks.push(taskText);
        taskInput.value = "";
        renderTasks();
    }
}

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            ${task} 
            <button onclick="deleteTask(${index})">Delete</button>
            <button onclick="updateTask(${index})">Update</button>
        `;
        taskList.appendChild(taskItem);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function updateTask(index) {
    const newTask = prompt("Update the task:", tasks[index]);
    if (newTask !== null && newTask.trim() !== "") {
        tasks[index] = newTask.trim();
        renderTasks();
    }
}
