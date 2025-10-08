import { cartSlice } from '@entities/cart/model/slice';
import type { CartItem } from '@entities/cart/model/types';
import { checkoutSlice } from '@entities/checkout/model/slice';
import { navigateToCheckout } from '@features/checkout-navigate/checkout-navigate';
import { useAppDispatch, useAppSelector } from '@shared/redux/store';
import { Button } from '@shared/ui/buttons/button';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../../../5_entities/cart/lib/format-price';
import { getClasses } from './styles/get-classes';

type OrderSummaryProps = {
  sneakers: CartItem[];
  isEmpty: boolean;
  isCheckout?: boolean;
};

export const OrderSummary: FC<OrderSummaryProps> = ({
  sneakers,
  isEmpty,
  isCheckout = false,
}) => {
  if (isEmpty) return;
  const { cnRoot, cnMainInfo, cnItems, cnTitle } = getClasses({ isCheckout });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const totalPrice = useAppSelector(cartSlice.selectors.totalPrice);
  const deliveryPrice = useAppSelector(checkoutSlice.selectors.selectFormData)
    .deliveryOptions.price;
  const handleNavigate = () => navigateToCheckout(dispatch, navigate, sneakers);
  return (
    <div className={cnRoot}>
      <h1 className={cnTitle}>Order Summary</h1>
      <ul className={cnMainInfo}>
        <li className={cnItems}>
          <span>{sneakers.length} ITEM</span>
          <span>${formatPrice(totalPrice)}</span>
        </li>
        {isCheckout && (
          <li className={cnItems}>
            <span>Delivery</span>
            <span>${deliveryPrice}</span>
          </li>
        )}
        <li className={cnItems}>
          <span>Sales Tax</span>
          <span>-</span>
        </li>
        <li className={cnItems}>
          <span>Total</span>
          <span>${totalPrice + deliveryPrice}</span>
        </li>
      </ul>
      {!isCheckout && (
        <Button onClick={handleNavigate} variant="secondary" fullWidth>
          CHECKOUT
        </Button>
      )}
    </div>
  );
};
