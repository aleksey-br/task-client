/* eslint-disable max-len */
import { defineStore } from 'pinia';

export const useTodosStore = defineStore('todos', {
  state: () => ({
    boards: [
      { id: 1, name: 'ToDo', category: 'new' },
      { id: 2, name: 'Doing', category: 'doing' },
      { id: 3, name: 'Done', category: 'done' },
    ],
    tasks: [
      {
        id: 1,
        title: 'Item 1',
        descr:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error veniam tempora sunt aliquid nisi quas natus eius nesciunt recusandae culpa?',
        create_time: new Date().toLocaleDateString(),
        release_time: new Date().toLocaleDateString(),
        inProgress: 'new',
      },
      {
        id: 2,
        title: 'Item 2',
        descr:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error veniam tempora sunt aliquid nisi quas natus eius nesciunt recusandae culpa?',
        create_time: new Date().toLocaleDateString(),
        release_time: new Date().toLocaleDateString(),
        inProgress: 'doing',
      },
      // {
      //   id: 3,
      //   title: 'Item 3',
      //   descr:
      //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error veniam tempora sunt aliquid nisi quas natus eius nesciunt recusandae culpa?',
      //   create_time: new Date(),
      //   release_time: '',
      //   inProgress: 'doing',
      // },
      // {
      //   id: 4,
      //   title: 'Item 3',
      //   descr:
      //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error veniam tempora sunt aliquid nisi quas natus eius nesciunt recusandae culpa?',
      //   create_time: new Date(),
      //   release_time: '',
      //   inProgress: 'new',
      // },
      // {
      //   id: 5,
      //   title: 'Item 3',
      //   descr:
      //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error veniam tempora sunt aliquid nisi quas natus eius nesciunt recusandae culpa?',
      //   create_time: new Date(),
      //   release_time: '',
      //   inProgress: 'done',
      // },
    ],
  }),
  getters: {
    getFullList: (state) => {
      return state.boards.filter((board) => {
        return Object.assign(board, {
          items: state.tasks.filter((task) => task.inProgress === board.category),
        });
      });
    },
  },
  actions: {},
});
