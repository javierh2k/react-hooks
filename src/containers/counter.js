import React from 'react';
import styled from 'styled-components';
import { Block } from '../components/counter';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: column;
`;

const Blocks = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  padding: 1rem;
`;

const Counter = props => (
  <Container>
    <Blocks>
      <Block types={['user']} />
      <Block types={['count']} />
      <Block types={['count', 'user']} />
    </Blocks>
  </Container>
);

export default Counter;
