import React from 'react';
import {  Tr, Td } from '@bootstrap-styled/v4';

export const TrMessage = ({ colspan, children }) => (
  <Tr>
    <Td colSpan={colspan} style={{ textAlign: 'center' }}>
      <div>{children}</div>
    </Td>
  </Tr>
);
