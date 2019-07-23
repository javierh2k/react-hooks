import React, { Suspense, useEffect, useState } from 'react';
import { View, NotFoundBoundary, useLoadingRoute, Router } from 'react-navi';

import { ThemeProvider } from 'styled-components/macro';
import BootstrapProvider from '@bootstrap-styled/provider';
import GlobalStyle from './GlobalStyle';
import { Layout } from './components/layout';
import theme from './theme';
import StoreProvider from './store';
import { RenderNotFound } from './components/errors/404';
import routes from './routes';
import { authService } from './services/auth';

// const [currentUser, setCurrentUser] = useState(() =>
//   authService.getCurrentUser()
// );

// Subscribe that state to the value emitted by the auth service
//useEffect(() => authService.subscribe(setCurrentUser), []);

function App() {
  const loadingRoute = useLoadingRoute();
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <BootstrapProvider theme={{ '$brand-danger': 'green' }}>
          <GlobalStyle />
          <Layout isLoading={loadingRoute}>
            <NotFoundBoundary render={RenderNotFound}>
              {/* <Router routes={routes} context={{ authService, currentUser }}>
                <Suspense fallback={null}> */}
              <View />
              {/* </Suspense>
              </Router> */}
            </NotFoundBoundary>
          </Layout>
        </BootstrapProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
