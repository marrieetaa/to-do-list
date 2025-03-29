document.addEventListener('DOMContentLoaded',function() {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('taks-list');

    addTaskBtn.addEventListener('click',function() {
        let taskText = taskInput.value.trim();
        let toUpperCaseFirstLetter = taskText.charAt(0).toUpperCase() + taskText.slice(1).toLowerCase();
        taskText = toUpperCaseFirstLetter;
        if (taskText === "") return;

        const li = document.createElement('li');
        li.textContent = taskText;
        taskList.appendChild(li);
    })
})