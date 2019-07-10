import React from 'react';
import { Table, Thead, Tr, Th, Tbody } from '@bootstrap-styled/v4';
import { NavLink } from 'react-navi';
import { EmployeeRow } from '../components/employee/EmployeeRow';

const EmployeeTable = ({ reqdata }) => (
  <React.Fragment>
    <NavLink className="button" href="/employee/0">
      Nuevo
    </NavLink>{' '}
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
        <EmployeeRow reqdata={reqdata} />
      </Tbody>
    </Table>
  </React.Fragment>
);

// EmployeeTable.propTypes = {
//   data: PropTypes.any,
// };

export default EmployeeTable;
