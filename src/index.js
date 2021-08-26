import './style/style.css';

import { addTask, editTask, removeTask } from './module/task';

import completed from './module/completed';

const listContainer = document.querySelector('.lists');
const add = document.getElementById('add-btn');
const input = document.getElementById('new-task');
let inputtedTask;

const tasks =
  localStorage.getItem('tasks') !== null
    ? JSON.parse(localStorage.getItem('tasks'))
    : [];

const iterate = () => {
  console.log(inputtedTask);
  tasks.sort((a, b) => b.index - a.index);
  tasks.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'ul-li';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'completed';
    checkbox.name = 'completed';
    checkbox.className = 'checkbox';
    const description = document.createElement('p');
    description.className = 'description';
    description.innerText = `${item.description}`;
    if (item.completed === true) {
      checkbox.checked = true;
      description.style.textDecoration = 'line-through solid';
    } else {
      checkbox.checked = false;
    }
    checkbox.addEventListener('change', (event) => {
      completed(item.index, item, event, description);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });
    description.addEventListener('click', () => {
      description.setAttribute('contenteditable', 'true');
      description.addEventListener('input', () => {
        item.description = description.innerText;
        editTask(item, tasks);
      });
    });
    li.appendChild(checkbox);
    li.appendChild(description);
    listContainer.appendChild(li);
  });
};

window.addEventListener('load', iterate);
input.addEventListener('input', (e) => {
  inputtedTask = e.target.value;
  console.log(inputtedTask);
});

add.addEventListener('click', () => {
  if (inputtedTask !== undefined) {
    console.log(inputtedTask);
    const newTask = addTask(tasks, inputtedTask);
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    window.location.reload();
  } else {
    alert('Input a task description');
  }
});
