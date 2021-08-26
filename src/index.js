import './style/style.css';

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
    li.appendChild(checkbox);
    li.appendChild(description);
    listContainer.appendChild(li);
  });
};

window.addEventListener('load', iterate);
