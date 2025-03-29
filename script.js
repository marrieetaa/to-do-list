document.addEventListener('DOMContentLoaded',function() {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('taks-list');

    addTaskBtn.addEventListener('click',function() {
        const tasktext = taskInput.value.trim();
        const toUpperCaseFirstLetter = tasktext.charAt(0).toUpperCase() + tasktext.slice(1).toLowerCase();
        tasktext = toUpperCaseFirstLetter;
        if (taskText === "") return;
    })
})