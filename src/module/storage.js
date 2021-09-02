const setStorage = (tasks) => {
  console.log('we are using the real function');
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export default setStorage;
