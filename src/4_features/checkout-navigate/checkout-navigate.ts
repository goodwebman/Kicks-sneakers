import type { CartItem } from '@entities/cart/model/types';
import { setCheckoutItems } from '@entities/checkout/model/slice'

import { Routes } from '@shared/constants/routes';
import type { AppDispatch } from '@shared/redux/store';

export const navigateToCheckout = (
  dispatch: AppDispatch,
  navigate: (path: string) => void,
  sneakers: CartItem[],
) => {
  dispatch(setCheckoutItems(sneakers));
  navigate(Routes.checkout);
};
