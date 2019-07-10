import React from 'react';
import { Tr, Td } from '@bootstrap-styled/v4';
import { NavLink } from 'react-navi';
import { TrMessage } from '../shared/tables';

export const UserRow = ({ reqdata }) => {
  const { data, error, loading } = reqdata;
  const allUsers = data.users || [];
  if (loading) return <TrMessage data={allUsers}> loading... </TrMessage>;
  if (error)
    return <TrMessage data={allUsers}> Error! {error.message} </TrMessage>;
  return allUsers.map((user, key) => (
    <Tr key={`user-row-${user.id}`}>
      <Td scope="row"> {key + 1}</Td>
      <Td>{user.username}</Td>
      <Td>{user.blocked}</Td>
      <Td>
        <NavLink href={`/user/${user.id}`}>{user.email}</NavLink>
      </Td>
    </Tr>
  ));
};
