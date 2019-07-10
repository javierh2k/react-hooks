import React, { Fragment, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useStore } from '../../store/useStore';
import { BlockInner, BlockText, Button, BlockContainer } from './styles';

const UserBlock = props => {
  const {
    state: {
      user: { loggedIn },
    },
    dispatch,
  } = useStore();

  const login = useCallback(() => dispatch({ type: 'login' }), [dispatch]);
  const logout = useCallback(() => dispatch({ type: 'logout' }), [dispatch]);

  const handleClick = () => {
    loggedIn ? logout() : login();
  };

  return (
    <BlockInner type="user">
      <BlockText> {loggedIn ? 'Logged In' : 'Logged Out'}</BlockText>
      <Button onClick={handleClick}> {loggedIn ? 'Logout' : 'Login'}</Button>
    </BlockInner>
  );
};

const CountBlock = props => {
  const { state, dispatch } = useStore();

  const increment = useCallback(() => dispatch({ type: 'increment' }), [
    dispatch,
  ]);
  const decrement = useCallback(() => dispatch({ type: 'decrement' }), [
    dispatch,
  ]);

  return (
    <BlockInner type="count">
      <BlockText>Counter: {state.count}</BlockText>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </BlockInner>
  );
};

export const Block = ({ types }) => (
  <BlockContainer>
    {types.map(type => {
      switch (type) {
        case 'user':
          return <UserBlock />;
        case 'count':
          return <CountBlock />;
        default:
          return null;
      }
    })}
  </BlockContainer>
);

Block.propTypes = {
  types: PropTypes.any,
};
