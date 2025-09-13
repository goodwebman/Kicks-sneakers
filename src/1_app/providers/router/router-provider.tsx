import { type FC, Suspense } from 'react';
import {
  createBrowserRouter,
  RouterProvider as RouterProviderLib,
} from 'react-router-dom';
import { ErrorBoundary } from '../error-boundary/errror-boundary';
import { privateRoutes } from './routes/private-routes';
import { publicRoutes } from './routes/public-routes';
import { PrivateOutlet } from './routing/private-outlet';
import { PublicOutlet } from './routing/public-outlet'

export const router = createBrowserRouter([
  {
    element: (
      <ErrorBoundary>
        <Suspense fallback={<div>Загрузка...</div>}>
          <PrivateOutlet />
        </Suspense>
      </ErrorBoundary>
    ),
    children: privateRoutes,
  },
  {
    element: (
      <ErrorBoundary>
        <Suspense fallback={<div>Загрузка...</div>}>
          <PublicOutlet />
        </Suspense>
      </ErrorBoundary>
    ),
    children: publicRoutes,
  },
]);

export const RouterProvider: FC = () => <RouterProviderLib router={router} />;
