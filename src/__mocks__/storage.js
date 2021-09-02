let items = [];
const setStorage = (tasks) => {
  console.log('We are using a mock function for set storage');
  items = tasks;
  return items;
};

export default setStorage;
