import type { RouteObject } from 'react-router-dom';

import { Routes } from '../../../../6_shared/constants/routes';
import { CheckoutPage } from '@pages/checkout/Checkout'
import { OrdersPage } from '@pages/orders/orders-page'

export const privateRoutes: RouteObject[] = [
  {
    path: Routes.checkout,
    element: <CheckoutPage />,
  },
  {
    path: Routes.orders,
    element: <OrdersPage />
  },
];
