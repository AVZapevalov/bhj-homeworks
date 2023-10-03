const taskInput = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');
const taskForm = document.getElementById('tasks__form');

function createNewTask(taskText) {
  const task = document.createElement('div');
  task.className = 'task';
  
  const taskTitle = document.createElement('div');
  taskTitle.className = 'task__title';
  taskTitle.textContent = taskText;
  
  const taskRemove = document.createElement('a');
  taskRemove.className = 'task__remove';
  taskRemove.textContent = '×';
  
  taskRemove.addEventListener('click', function () {
    task.remove();
  });
  
  task.appendChild(taskTitle);
  task.appendChild(taskRemove);
  taskList.appendChild(task);
}

taskForm.addEventListener('submit', function (event) {
  event.preventDefault(); 
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    createNewTask(taskText);
    taskInput.value = '';
  }
});
