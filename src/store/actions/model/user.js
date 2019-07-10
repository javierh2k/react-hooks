import { action, thunk, computed } from 'easy-peasy';
import { client } from '../../../hooks';
import { CREATE_USER, UPDATE_USER } from '../../../services/user/mutations';
import { saveModel } from './base';

export default {
  // computed properties
  // list: computed(state => Object.values(state.users)),

  // actions
  //   fetched: action((state, payload) => {
  //     state.items = payload.reduce((acc, todo) => {
  //       acc[todo.id] = todo;
  //       return acc;
  //     }, {});
  //   }),

  saved: action((state, payload) => {
    state.user = payload;
  }),

  login: action(state => {
    state.user.loggedIn = true;
  }),
  logout: action(state => {
    state.user.loggedIn = false;
  }),

  // thunks
  //   fetchTodos: thunk(async actions => {
  //     const todos = await mockService.fetchTodos();
  //     actions.fetched(todos);
  //   }),
  //   toggle: thunk(async (actions, payload, { getState }) => {
  //     const todo = getState().items[payload];
  //     if (!todo) return;
  //     const updated = await mockService.updateTodo(payload, {
  //       done: !todo.done
  //     });
  //     actions.saved(updated);
  //   }),
  save: thunk(async (actions, payload) => {
    const model = await saveModel(client, payload, CREATE_USER, UPDATE_USER);
    actions.saved(model);
  }),
};
