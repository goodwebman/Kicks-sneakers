import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { Auth } from '../../2_pages/auth/Auth';
import { Cart } from '../../2_pages/cart/Cart';
import { Checkout } from '../../2_pages/checkout/Checkout';
import { Home } from '../../2_pages/home/Home';
import { ProductDetails } from '../../2_pages/product-details/ProductDetails';
import { Products } from '../../2_pages/products/Products';
import { DefaultLayout } from '../layouts';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<DefaultLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/auth" element={<Auth />} />
    </Route>,
  ),
);
