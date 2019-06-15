import React from 'react';
import { View, NotFoundBoundary, useLoadingRoute } from 'react-navi';

import { ThemeProvider } from 'styled-components/macro';
import BootstrapProvider from '@bootstrap-styled/provider';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import GlobalStyle from './GlobalStyle';
import { Layout } from './components/layout';
import theme from './theme';
import { RenderNotFound } from './components/errors/404';
// import useCombinedReducers from 'use-combined-reducers';
//
import { URL } from './config';

const client = new ApolloClient({
  link: new HttpLink({ uri: URL }),
  cache: new InMemoryCache(),
});

function App() {
  const loadingRoute = useLoadingRoute();

  // const [state, dispatch] = useCombinedReducers({
  //   filter: useReducer(filterReducer, 'ALL'),
  //   todos: useReducer(todoReducer, initialTodos),
  // });

  return (
    <ThemeProvider theme={theme}>
      <BootstrapProvider theme={{ '$brand-danger': 'green' }}>
        <GlobalStyle />
        <Layout isLoading={loadingRoute}>
          <NotFoundBoundary render={RenderNotFound}>
            <ApolloHooksProvider client={client}>
              <View />
            </ApolloHooksProvider>
          </NotFoundBoundary>
        </Layout>
      </BootstrapProvider>
    </ThemeProvider>
  );
}

export default App;
