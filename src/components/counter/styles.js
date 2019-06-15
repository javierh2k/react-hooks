import styled from 'styled-components';

export const BlockContainer = styled.div`
  display: flex;
  flex: 1;
  flex-flow: column;
  height: 100%;
`;

export const BlockInner = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 1rem solid red;
  background: ${({ type }) =>
    type === 'user' ? 'var(--primary-color)' : 'var(--secondary-color)'};
`;

export const Button = styled.button`
  appearance: none;
  background: transparent;
  border: 1px solid red;
  border-radius: 3px;
  color: red;
  padding: 0.5rem 2rem;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  cursor: pointer;
  &:hover {
    background-color: red;
    color: purple;
  }
`;

export const BlockText = styled.p`
  margin-bottom: 1rem;
  color: red;
`;
