import {
  addTask, clearCompleted, editTask, removeTask,
} from '../module/task';

import completed from '../__mocks__/completed';

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

describe('Edit Task', () => {
  it('Edit task description', () => {
    const update = {
      description: 'edit do some coding task',
      completed: false,
      index: 1,
    };
    expect(editTask(update, tasks)).toEqual([
      {
        description: 'edit do some coding task',
        completed: false,
        index: 1,
      },
      {
        description: 'learn another language',
        completed: false,
        index: 3,
      },
    ]);
  });

  it('Check edited task description', () => {
    expect(tasks[0].description).toBe('edit do some coding task');
  });

  it('Check task as completed', () => {
    const task = {
      description: 'go to school',
      completed: false,
      index: 3,
    };
    expect(completed(3, task, true)).toEqual({
      description: 'go to school',
      completed: true,
      index: 3,
    });
  });
});

describe('Clear completed', () => {
  const removeCompleted = [
    { description: 'do some excercise', completed: false, index: 1 },
    { description: 'cooks some food', completed: true, index: 2 },
    { description: 'go hiking', completed: true, index: 3 },
  ];

  it('Clear all completed tasks', () => {
    expect(clearCompleted(removeCompleted)).toEqual([
      { description: 'do some excercise', completed: false, index: 1 },
    ]);
  });

  it('check length of array after removing completed tasks', () => {
    const checkCompleted = clearCompleted(removeCompleted);
    expect(checkCompleted).toHaveLength(1);
  });
});
