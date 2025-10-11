export const Routes = {
  root: '/',
  sneakers: {
    root: '/sneakers',
    details: (id: string ) => `/sneakers/${id}`,
  },
  cart: '/cart',
  checkout: '/checkout',
  auth: '/auth',
  orders: '/orders',
  admin: '/admin'
} as const;
