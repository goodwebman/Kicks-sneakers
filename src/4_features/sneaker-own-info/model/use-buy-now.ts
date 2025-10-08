import type { CartItem } from '@entities/cart/model/types';
import { checkoutSlice } from '@entities/checkout/model/slice';
import { userSlice } from '@entities/user/model/slice';
import { Routes } from '@shared/constants/routes';
import { useAppDispatch, useAppSelector } from '@shared/redux/store';
import { useNavigate } from 'react-router-dom';

export const useBuyNow = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector(userSlice.selectors.selectUser);

  const buySneakerNow = (sneaker: CartItem) => {
    dispatch(checkoutSlice.actions.setCheckoutItems([sneaker]));
    if (user) {
      dispatch(checkoutSlice.actions.setUserId(user.id));
    }
    navigate(Routes.checkout, { state: { isBuyNow: true } });
  };

  return { buySneakerNow };
};
