import React from 'react';
import { Tr, Td } from '@bootstrap-styled/v4';
import { NavLink } from 'react-navi';
import { TrMessage } from '../shared/tables';

export const EmployeeRow = ({ reqdata }) => {
  const { data, error, loading } = reqdata;
  const allEmployees = data.employees || [];
  if (loading) return <TrMessage data={allEmployees}> loading... </TrMessage>;
  if (error)
    return <TrMessage data={allEmployees}> Error! {error.message} </TrMessage>;
  return allEmployees.map((employee, key) => (
    <Tr key={`employee-row-${employee.id}`}>
      <Td scope="row"> {key + 1}</Td>
      <Td>{employee.name}</Td>
      <Td>{employee.lastname}</Td>
      <Td>
        <NavLink href={`/employee/${employee.id}`}>{employee.email}</NavLink>
      </Td>
    </Tr>
  ));
};
