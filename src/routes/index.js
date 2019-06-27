import React from 'react';
import { mount, route } from 'navi';
import { UserForm } from '../components/user/Form';
import User from '../containers/users';
import { useAllUsers, useUser } from '../hooks/user';

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

  '/counter': route({
    title: 'Counter',
    getView: () => import('../containers/counter.js'),
  }),

  '/about': route({
    title: 'About',
    getView: async () => import('../containers/about.js'),
  }),

  '/users': route(async req => {
    console.warn(req);
    const result = await useAllUsers(true);
    console.log(result, 'result');
    return {
      view: <User reqdata={result} />,
    };
  }),

  '/user/:id': route(async req => {
    const { id } = req.params;
    const result = await useUser(id, true);

    // const reqdata = await fetch({
    //   query: `query ${GET_USER}`,
    //   variables: { id },
    // });
    console.log(result, '++++');
    // reqdata.data.User
    return {
      view: <UserForm id={id} reqdata={result} />,
    };
  }),
});
