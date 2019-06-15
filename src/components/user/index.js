import React from 'react';

import { Table, Thead, Tr, Th, Tbody, Td } from '@bootstrap-styled/v4';

import { NavLink } from 'react-navi';
import { TrMessage } from '../shared';
import { useAllUsers } from '../../hooks/user';

const UserRow = ({ reqdata, id }) => {
  const { data, error, loading } = useAllUsers(reqdata);

  const colspan = (data.allUsers || []).length || 4;
  if (loading) return <TrMessage colspan={colspan}> loading... </TrMessage>;
  if (error)
    return <TrMessage colspan={colspan}> Error! {error.message} </TrMessage>;

  return data.allUsers.map((user, key) => (
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
