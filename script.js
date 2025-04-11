document.addEventListener('DOMContentLoaded',function() {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
     
    loadTasks();

    function addAndRemoveItems(){
        let taskText = taskInput.value.trim();
        let toUpperCaseFirstLetter = taskText.charAt(0).toUpperCase() + taskText.slice(1);
        taskText = toUpperCaseFirstLetter;
        if (taskText === "") return;

        const li = document.createElement('li');
        li.textContent = taskText;
        if(li) li.classList.add('task-li');

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        if(deleteBtn) deleteBtn.classList.add('delete-btn')
        deleteBtn.addEventListener('click',function() {
            taskList.removeChild(li);
        });

        li.addEventListener('click',function() {
            li.classList.toggle('done');
        });

        taskList.appendChild(li);
        li.appendChild(deleteBtn);
        saveTaskToLocalStorage(taskText);
        taskInput.value = "";
    }
   
    addTaskBtn.addEventListener('click', addAndRemoveItems);
    taskInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            addAndRemoveItems();
        }
    });  

    //Function to load tasks from LocalStorage
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.text;
            if(task.completed) li.classList.add('done');
            if(task) li.classList.add('task-li');

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = ' Delete';
            if(deleteBtn) deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener('click',function() {
                taskList.removeChild(li);
                removeTaskFromLocalStorage(task.text);
            });
            li.addEventListener('click',function() {
                li.classList.toggle('done');
                updateTaskInLocalStorage(task.text, li.classList.contains('done'));
            });
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
        });
    }

    //Function to save task to LOcalStorage
    function saveTaskToLocalStorage(taskText) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({text: taskText, completed: false});
    localStorage.setItem('tasks',JSON.stringify(tasks));
   }

    //Function to remove task from LocalStorage
    function removeTaskFromLocalStorage(taskText) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.filter(task => task.text !== taskText);
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }

    //Function to update task status in LocalStorage
    function updateTaskInLocalStorage(taskText,completed) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const task = tasks.find(task => task.text === taskText);
        if(task){
            task.completed = completed;
            localStorage.setItem('tasks',JSON.stringify(tasks));
        }
    }
});


