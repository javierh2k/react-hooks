import { GET_EMPLOYEES, GET_EMPLOYEE } from '../../services/employee/queries';
import { client } from '../index';

async function getEmployee(id) {
  let result = [];
  let errorQuery = '';

  try {
    result = await client.request(GET_EMPLOYEE, { id });
    if (result.errors) throw result.errors[0];
  } catch (error) {
    errorQuery = error;
  }

  return { error: errorQuery, data: result || false };
}

async function getAlllEmployees() {
  let result = [];
  let errorQuery = '';

  try {
    result = await client.request(GET_EMPLOYEES);
    if (result.errors) throw result.errors[0];
  } catch (error) {
    errorQuery = error;
  }
  return { error: errorQuery, data: result || false };
}

export function useAllEmployees(serverData) {
  if (serverData) {
    console.log('from server');
    return getAlllEmployees();
  }
}

export function useEmployee(id, serverData) {
  if (serverData) {
    console.log('from server');
    return getEmployee(id);
  }
}
