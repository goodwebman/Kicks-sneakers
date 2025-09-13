export const Routes = {
  root: '/',
  sneakers: {
    root: '/sneakers',
    details: (id: string | number) => `/sneakers/${id}`,
  },
  cart: '/cart',
  checkout: '/checkout',
  auth: '/auth',
} as const;
