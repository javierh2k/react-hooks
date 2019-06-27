import React from 'react';

import { Table, Thead, Tr, Th, Tbody, Td } from '@bootstrap-styled/v4';

import { NavLink } from 'react-navi';
import { TrMessage } from '../components/shared/tables';
import { useAllUsers } from '../hooks/user';

const UserRow = ({ reqdata }) => {
  const { data, error, loading } = reqdata || useAllUsers();
  console.log('+++++', error);
  const allUsers = data.allUsers || [];
  if (loading) return <TrMessage data={allUsers}> loading... </TrMessage>;
  if (error)
    return <TrMessage data={allUsers}> Error! {error.message} </TrMessage>;

  return allUsers.map((user, key) => (
    <Tr key={`user-row-${user.id}`}>
      <Td scope="row"> {key + 1}</Td>
      <Td>{user.firstName}</Td>
      <Td>{user.lastName}</Td>
      <Td>
        <NavLink href={`/user/${user.id}`}>{user.email}</NavLink>
      </Td>
    </Tr>
  ));
};

const UserTable = ({ reqdata }) => (
  <Table hover>
    <Thead>
      <Tr color="active">
        <Th>#</Th>
        <Th>First Name</Th>
        <Th>Last Name</Th>
        <Th>EMail</Th>
      </Tr>
    </Thead>
    <Tbody>
      <UserRow reqdata={reqdata} />
    </Tbody>
  </Table>
);

// UserTable.propTypes = {
//   data: PropTypes.any,
// };

export default UserTable;
