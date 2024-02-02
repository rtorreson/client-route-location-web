import { Suspense } from 'react';
import { Provider } from 'mobx-react';
import { Observer } from 'mobx-react-lite';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';

import { stores } from './stores';
import { GlobalStyle, defaultTheme } from '@/shared/styles/theme';
import '../shared/styles/toast.css';
import { ComposableLoader } from '@/shared/composables';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <Provider {...stores}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <div style={{ display: 'flex' }}>
            <Observer>
              {() => (
                <Suspense fallback={<ComposableLoader />}>
                  <Outlet />
                </Suspense>
              )}
            </Observer>
          </div>
        </ThemeProvider>
      </QueryClientProvider>
      <ToastContainer />
    </Provider>
  );
}
