import React from 'react';
import { View, NotFoundBoundary, useLoadingRoute } from 'react-navi';

import { ThemeProvider } from 'styled-components/macro';
import BootstrapProvider from '@bootstrap-styled/provider';
import GlobalStyle from './GlobalStyle';
import { Layout } from './components/layout';
import theme from './theme';
import StoreProvider from './store';
import { RenderNotFound } from './components/errors/404';

function App() {
  const loadingRoute = useLoadingRoute();
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <BootstrapProvider theme={{ '$brand-danger': 'green' }}>
          <GlobalStyle />
          <Layout isLoading={loadingRoute}>
            <NotFoundBoundary render={RenderNotFound}>
              <View />
            </NotFoundBoundary>
          </Layout>
        </BootstrapProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
