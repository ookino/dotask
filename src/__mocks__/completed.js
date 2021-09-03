const completed = (index, task, e) => {
  if (e === true) {
    if (task.index === index) {
      task.completed = true;
    }
    return task;
  }
  if (e === false) {
    if (task.index === index) {
      task.completed = false;
    }
    return task;
  }
  return task;
};

export default completed;
