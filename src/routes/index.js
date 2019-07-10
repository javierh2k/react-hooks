import React from 'react';
import { mount, route } from 'navi';
import { UserForm } from '../components/user/Form';
import { EmployeeForm } from '../components/employee/Form';
import Users from '../containers/users';
import Employees from '../containers/employees';
import { useAllUsers, useUser } from '../hooks/user';
import { useAllEmployees, useEmployee } from '../hooks/employee';

export default mount({
  '/': route({
    title: 'Home',
    head: (
      <>
        <meta name="description" content="And example app" />
      </>
    ),
    getView: () => import('../containers/home.js'),
  }),

  // '/counter': route({
  //   title: 'Counter',
  //   getView: () => import('../containers/counter.js'),
  // }),

  '/about': route({
    title: 'About',
    getView: async () => import('../containers/about.js'),
  }),

  '/users': route(async req => {
    console.warn(req);
    const result = await useAllUsers(true);
    console.log(result, '______');
    return {
      view: <Users reqdata={result} />,
    };
  }),

  '/user/:id': route(async req => {
    const { id } = req.params;
    const result = await useUser(id, true);
    console.log(result, '++++');
    return {
      view: <UserForm id={id} reqdata={result} />,
    };
  }),

  '/employees': route(async req => {
    const result = await useAllEmployees(true);
    return {
      view: <Employees reqdata={result} />,
    };
  }),

  '/employee/:id': route(async req => {
    const { id } = req.params;
    const result = await useEmployee(id, true);
    return {
      view: <EmployeeForm id={id} reqdata={result} />,
    };
  }),
});
