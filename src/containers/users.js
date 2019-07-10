import React from 'react';
import { Table, Thead, Tr, Th, Tbody, Button } from '@bootstrap-styled/v4';
import { NavLink } from 'react-navi';
import { UserRow } from '../components/user/UserRow';

const UserTable = ({ reqdata }) => (
  <React.Fragment>
    <NavLink className="button" href="/user/0">
      Nuevo
    </NavLink>{' '}
    <Table hover>
      <Thead>
        <Tr color="active">
          <Th>#</Th>
          <Th>Usuario</Th>
          <Th>Bloqueado</Th>
          <Th>EMail</Th>
        </Tr>
      </Thead>
      <Tbody>
        <UserRow reqdata={reqdata} />
      </Tbody>
    </Table>
  </React.Fragment>
);

// UserTable.propTypes = {
//   data: PropTypes.any,
// };

export default UserTable;
