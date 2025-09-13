import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '../6_shared/api/query-client.ts';
import './../6_shared/theme/themes/typography.module.scss';
import './index.css';
import { ErrorBoundary } from './providers/error-boundary/errror-boundary.tsx';
import { RouterProvider } from './providers/router/router-provider.tsx';
import { ThemeProvider } from './providers/theme/theme-provider.tsx';

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <ThemeProvider>
          <RouterProvider />
        </ThemeProvider>
      </ErrorBoundary>
    </QueryClientProvider>
  );
};
