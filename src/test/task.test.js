import { addTask, removeTask } from '../module/task';

jest.mock('../module/storage.js');

let tasks = [
  { description: 'do some coding', completed: false, index: 1 },
  { description: 'hire a help', completed: true, index: 2 },
];

describe('Add Tasks', () => {
  it('add new task', () => {
    tasks.push(addTask(tasks, 'learn another language'));
    expect(tasks[2]).toEqual({
      description: 'learn another language',
      completed: false,
      index: 3,
    });
  });

  it('Task array should have a length of 3', () => {
    expect(tasks).toHaveLength(3);
  });
});

describe('Remove Task', () => {
  it('Remove single task', () => {
    expect(tasks.length).toBe(3);
    tasks = removeTask(2, tasks);
    expect(tasks.length).toBe(2);
  });
});
