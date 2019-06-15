import React, { createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';

import { countInitialState, countActions } from './actions/countActions';
import { userInitialState, userActions } from './actions/userActions';

const initialState = {
  ...countInitialState,
  ...userInitialState,
};

const StoreContext = createContext(initialState);

const Actions = {
  ...userActions,
  ...countActions,
};

const reducer = (state, action) => {
  const updateStateFunc = Actions[action.type];
  delete action.type;
  const update = updateStateFunc(state, action);
  return { ...state, ...update };
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.node,
};

export const useStore = store => {
  const { state, dispatch } = useContext(StoreContext);
  return { state, dispatch };
};
