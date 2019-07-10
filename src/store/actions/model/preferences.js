import { action } from 'easy-peasy';

export default {
  theme: 'light',

  // actions
  toggle: action(state => {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
  }),
};
