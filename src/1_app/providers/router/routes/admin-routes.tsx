import { AdminPage } from '@pages/admin/admin-page';
import type { RouteObject } from 'react-router-dom';
import { Routes } from '../../../../6_shared/constants/routes';

export const adminRoutes: RouteObject[] = [
  {
    path: Routes.admin,
    element: <AdminPage />,
  },
];
