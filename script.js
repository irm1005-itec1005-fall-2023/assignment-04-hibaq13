document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.querySelector('.task-input');
    const addTaskButton = document.querySelector('.add-task-button');
    const clearTasksButton = document.querySelector('.clear-tasks-button');
    const tasksContainer = document.getElementById('tasksContainer');
    const emptyState = document.getElementById('emptyState');
 
 
    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
 
 
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
            showEmptyState();
        }
    });
 
 
    clearTasksButton.addEventListener('click', function () {
        tasksContainer.innerHTML = '';
        showEmptyState();
    });
 
 
    tasksContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-button')) {
            deleteTask(event.target.parentElement.id);
        }
    });
 
 
    function addTask(taskText) {
        const taskId = Date.now().toString();
        const taskItem = document.createElement('section');
        taskItem.classList.add('task-item');
        taskItem.id = taskId;
        taskItem.innerHTML = `
            <input type="checkbox" id="${taskId}">
            <label for="${taskId}">${taskText}</label>
            <button class="delete-button">Delete</button>
        `;
        tasksContainer.appendChild(taskItem);
        showEmptyState();
    }
 
 
    function deleteTask(taskId) {
        const taskItem = document.getElementById(taskId);
        if (taskItem) {
            taskItem.remove();
            showEmptyState();
        }
    }
 
 
    function showEmptyState() {
        if (tasksContainer.children.length === 0) {
            emptyState.style.display = 'block';
        } else {
            emptyState.style.display = 'none';
        }
    }
 });
 