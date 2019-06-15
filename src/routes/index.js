import React from 'react';
import { mount, route } from 'navi';
import { createApolloFetch } from 'apollo-fetch';
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
});
