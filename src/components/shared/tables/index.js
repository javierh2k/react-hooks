import React from 'react';
import { Tr, Td } from '@bootstrap-styled/v4';

export const TrMessage = ({ data, children }) => {
  const colspan = (data || []).length || 4;
  return (
    <Tr>
      <Td colSpan={colspan} style={{ textAlign: 'center' }}>
        <div>{children}</div>
      </Td>
    </Tr>
  );
};
