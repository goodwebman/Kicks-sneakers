import { type FC, Suspense } from 'react';
import {
  createBrowserRouter,
  RouterProvider as RouterProviderLib,
} from 'react-router-dom';
import { Loader } from '../../../6_shared/ui/error-boundary-template/loader/loader';
import { ErrorBoundary } from '../error-boundary/errror-boundary';
import { adminRoutes } from './routes/admin-routes';
import { privateRoutes } from './routes/private-routes';
import { publicRoutes } from './routes/public-routes';
import { AdminOutlet } from './routing/admin-outlet';
import { PrivateOutlet } from './routing/private-outlet';
import { PublicOutlet } from './routing/public-outlet';

export const router = createBrowserRouter([
  {
    element: (
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <AdminOutlet />
        </Suspense>
      </ErrorBoundary>
    ),
    children: adminRoutes,
  },
  {
    element: (
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <PrivateOutlet />
        </Suspense>
      </ErrorBoundary>
    ),
    children: privateRoutes,
  },
  {
    element: (
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <PublicOutlet />
        </Suspense>
      </ErrorBoundary>
    ),
    children: publicRoutes,
  },
]);

export const RouterProvider: FC = () => <RouterProviderLib router={router} />;
