export function addTask(tasks, description) {
  const id = tasks.length + 1;
  const newTask = { description, completed: false, index: id };
  return newTask;
}

export function removeTask() {}

export function editTask() {}
