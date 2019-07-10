import React, { createContext, useReducer, useContext } from 'react';
import { StoreProvider, createStore } from 'easy-peasy';
import model from './actions/model';

const store = createStore(model);

export default ({ children }) => (
  <StoreProvider store={store}>{children}</StoreProvider>
);
