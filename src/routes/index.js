import React from 'react';
import { mount, route } from 'navi';
import { createApolloFetch } from 'apollo-fetch';
import { UserForm } from '../components/user/Form';
import User from '../components/user';
import { GET_USERS, GET_USER } from '../services/user/queries';
import { URL } from '../config';

const fetch = createApolloFetch({
  uri: URL,
});

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
    const reqdata = await fetch({
      query: `query ${GET_USERS}`,
      variables: { id: 1 },
    });

    return {
      view: <User reqdata={reqdata.data} />,
    };
  }),

  '/user/:id': route(async req => {
    const { id } = req.params;
    const reqdata = await fetch({
      query: `query ${GET_USER}`,
      variables: { id },
    });
    console.log(reqdata);

    return {
      view: <UserForm id={id} reqdata={reqdata.data.User} />,
    };
  }),
});
