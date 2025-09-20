import type { RouteObject } from 'react-router-dom'
import { Routes } from '../../../../6_shared/constants/routes'
import { Home } from '../../../../2_pages/home/Home'
import { ProductsPage } from '../../../../2_pages/products/Products'
import { ProductDetails } from '../../../../2_pages/product-details/ProductDetails'
import { Cart } from '../../../../2_pages/cart/Cart'
import { Auth } from '../../../../2_pages/auth/Auth'

export const publicRoutes: RouteObject[] = [
  {
    path: Routes.root,
    element: <Home />,
  },
  {
    path: Routes.sneakers.root,
    element: <ProductsPage />,
  },
  {
    path: `${Routes.sneakers.root}/:id`,
    element: <ProductDetails />,
  },
  {
    path: Routes.cart,
    element: <Cart />,
  },
  {
    path: Routes.auth,
    element: <Auth />,
  },
];
