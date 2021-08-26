export function addTask(tasks, description) {
  const id = tasks.length + 1;
  const newTask = { description, completed: false, index: id };
  return newTask;
}

export function removeTask() {}

export function editTask(task, tasks) {
  tasks.forEach((item) => {
    if (item.index === task.index) {
      item.description = task.description;
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
