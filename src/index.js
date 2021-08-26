import './style/style.css';

import completed from './module/completed';

const listContainer = document.querySelector('.lists');

const tasks =
  localStorage.getItem('tasks') !== null
    ? JSON.parse(localStorage.getItem('tasks'))
    : [];

const iterate = () => {
  tasks.sort((a, b) => a.index - b.index);
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
    description.innerHTML = `${item.description}`;
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
    li.appendChild(checkbox);
    li.appendChild(description);
    listContainer.appendChild(li);
  });
};

window.addEventListener('load', iterate);
