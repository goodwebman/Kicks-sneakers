import { cartSlice } from '@entities/cart/model/slice';
import type { CartItem } from '@entities/cart/model/types';
import { useAppSelector } from '@shared/redux/store';
import { Button } from '@shared/ui/buttons/button';
import type { FC } from 'react';
import { formatPrice } from './../../lib/format-price';
import { getClasses } from './styles/get-classes';

type OrderSummaryProps = {
  sneakers: CartItem[];
  isEmpty: boolean;
};

export const OrderSummary: FC<OrderSummaryProps> = ({ sneakers, isEmpty }) => {
  if (isEmpty) return;
  const { cnRoot, cnMainInfo, cnItems, cnTitle } = getClasses();
  const totalPrice = useAppSelector(cartSlice.selectors.totalPrice);
  const deliveryPrice = 6.99;
  return (
    <div className={cnRoot}>
      <h1 className={cnTitle}>Order Summary</h1>
      <ul className={cnMainInfo}>
        <li className={cnItems}>
          <span>{sneakers.length} ITEM</span>
          <span>${formatPrice(totalPrice)}</span>
        </li>
        <li className={cnItems}>
          <span>Delivery</span>
          <span>${deliveryPrice}</span>
        </li>
        <li className={cnItems}>
          <span>Sales Tax</span>
          <span>-</span>
        </li>
        <li className={cnItems}>
          <span>Total</span>
          <span>${totalPrice + deliveryPrice}</span>
        </li>
      </ul>
      <Button variant="secondary" fullWidth>
        CHECKOUT
      </Button>
    </div>
  );
};
