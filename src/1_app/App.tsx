import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '../6_shared/api/query-client.ts';

import { Toaster } from '../6_shared/ui/toaster/toaster.tsx';
import './index.css';
import { ErrorBoundary } from './providers/error-boundary/errror-boundary.tsx';
import { ReduxProvider } from './providers/redux/redux-provider.tsx';
import { RouterProvider } from './providers/router/router-provider.tsx';
import { ThemeProvider } from './providers/theme/theme-provider.tsx';

export const App = () => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ReduxProvider>
          <ThemeProvider>
            <RouterProvider />
            <Toaster />
          </ThemeProvider>
        </ReduxProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};
