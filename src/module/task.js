export function addTask(tasks, description) {
  const id = tasks.length + 1;
  const newTask = { description, completed: false, index: id };
  return newTask;
}

export function removeTask(index, tasks) {
  const remove = tasks.filter((item) => item.index !== index);
  localStorage.setItem('tasks', JSON.stringify(remove));
  window.location.reload();
}

export function editTask(task, tasks) {
  tasks.forEach((item) => {
    if (item.index === task.index) {
      item.description = task.description;
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function clearCompleted(tasks) {
  const removeCompleted = tasks.filter((item) => item.completed !== true);
  localStorage.setItem('tasks', JSON.stringify(removeCompleted));
  window.location.reload();
}
