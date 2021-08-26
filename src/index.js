import './style/style.css';

import completed from './module/completed';

const listContainer = document.querySelector('.lists');

const tasks = [
  {
    description: 'Go to school',
    completed: false,
    index: 3,
  },
  {
    description: 'Buy groceries',
    completed: false,
    index: 2,
  },
  {
    description: 'Do chores',
    completed: false,
    index: 1,
  },
];

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
      const updated = completed(item.index, tasks, event);
      localStorage.setItem('tasks', JSON.stringify(updated));
      console.log(localStorage);
    });
    li.appendChild(checkbox);
    li.appendChild(description);
    listContainer.appendChild(li);
  });
};

window.addEventListener('load', iterate);
