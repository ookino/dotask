const setStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export default setStorage;
