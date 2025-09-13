import type { RouteObject } from 'react-router-dom';
import { Checkout } from '../../../../2_pages/checkout/Checkout';
import { Routes } from '../../../../6_shared/constants/routes';

export const privateRoutes: RouteObject[] = [
  {
    path: Routes.checkout,
    element: <Checkout />,
  },
];
