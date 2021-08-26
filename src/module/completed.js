const completed = (index, tasks, e) => {
  let updateTasks;
  if (e.target.checked === true) {
    updateTasks = tasks.map((item) => {
      if (item.index === index) {
        return { ...item, completed: true };
      }
      return item;
    });
    return updateTasks;
  }
  if (e.target.checked === false) {
    updateTasks = tasks.map((item) => {
      if (item.index === index) {
        return { ...item, completed: false };
      }
      return item;
    });
    return updateTasks;
  }

  return updateTasks;
};

export default completed;
