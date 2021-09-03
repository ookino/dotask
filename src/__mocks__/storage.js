let items = [];
export const setStorage = (tasks) => {
  items = tasks;
  return items;
};

export const getStorage = () => items;
