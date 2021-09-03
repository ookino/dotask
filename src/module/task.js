import setStorage from './storage';

const randIndex = (tasks) => {
  const rand = Math.max(...tasks.map((item) => item.index), 1);
  const id = rand + 1;
  return id;
};

export function addTask(tasks, description) {
  const newTask = { description, completed: false, index: randIndex(tasks) };
  return newTask;
}

export function removeTask(index, tasks) {
  const remove = tasks.filter((item) => item.index !== index);
  if (remove.length > 0) {
    let counter = 1;
    remove.forEach((element) => {
      element.index = counter;
      counter += 1;
    });
  }
  setStorage(remove);
  return remove;
}

export function editTask(task, tasks) {
  tasks.forEach((item) => {
    if (item.index === task.index) {
      item.description = task.description;
    }
  });
  setStorage(tasks);
  return tasks;
}

export function clearCompleted(tasks) {
  const removeCompleted = tasks.filter((item) => item.completed !== true);
  setStorage(removeCompleted);
  return removeCompleted;
}
