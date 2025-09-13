import { QueryClientProvider } from '@tanstack/react-query';
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { queryClient } from '../6_shared/api/query-client.ts';
import { Loader } from '../6_shared/ui/error-boundary-template/loader/loader.tsx';
import './../6_shared/theme/themes/typography.module.scss';
import './index.css';
import { ErrorBoundary } from './providers/error-boundary/errror-boundary.tsx';
import { ThemeProvider } from './providers/theme/theme-provider.tsx';
import { router } from './routing/router.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <ThemeProvider>
          <Suspense fallback={<Loader />}>
            <RouterProvider router={router} />
          </Suspense>
        </ThemeProvider>
      </ErrorBoundary>
    </QueryClientProvider>
  </StrictMode>,
);
