import './style/style.css';

import {
  addTask, clearCompleted, editTask, removeTask,
} from './module/task';

import completed from './module/completed';

const listContainer = document.querySelector('.lists');
const add = document.getElementById('add-btn');
const input = document.getElementById('new-task');
const clear = document.getElementById('clear-btn');
let inputtedTask;

const tasks = localStorage.getItem('tasks') !== null
  ? JSON.parse(localStorage.getItem('tasks'))
  : [];

const iterate = () => {
  tasks.sort((a, b) => b.index - a.index);
  tasks.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'ul-li';
    const div = document.createElement('div');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'completed';
    checkbox.name = 'completed';
    checkbox.className = 'checkbox';
    const description = document.createElement('p');
    description.className = 'description';
    description.innerText = `${item.description}`;
    const deleteIcon = document.createElement('button');
    deleteIcon.className = 'del-btn';
    deleteIcon.type = 'button';
    deleteIcon.innerHTML = '<i class="far fa-trash-alt"></i>';
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
    li.addEventListener('mouseover', () => {
      deleteIcon.style.display = 'block';
    });
    li.addEventListener('mouseleave', () => {
      deleteIcon.style.display = 'none';
    });
    deleteIcon.addEventListener('click', () => {
      removeTask(item.index, tasks);
      window.location.reload();
    });
    div.appendChild(checkbox);
    div.appendChild(description);
    li.appendChild(div);
    li.appendChild(deleteIcon);
    listContainer.appendChild(li);
  });
};

window.addEventListener('load', iterate);
input.addEventListener('input', (e) => {
  inputtedTask = e.target.value;
});

add.addEventListener('click', () => {
  if (inputtedTask !== undefined) {
    const newTask = addTask(tasks, inputtedTask);
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    window.location.reload();
  } else {
    // eslint-disable-next-line no-alert
    alert('Input a task description');
  }
});

clear.addEventListener('click', () => {
  clearCompleted(tasks);
  window.location.reload();
});
