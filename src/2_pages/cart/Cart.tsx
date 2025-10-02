import { cartSlice } from '@entities/cart/model/slice';
import { OrderSummary } from '@entities/cart/ui/order-summary/order-summary';
import { YourBag } from '@entities/cart/ui/your-bag/your-bag';
import { useAppSelector } from '@shared/redux/store';
import { getClasses } from './styles/get-classes';
import { YouMayAlsoLike } from '@widgets/you-may-also-like/you-may-also-like'

export const Cart = () => {
  const cartSneakers = useAppSelector(cartSlice.selectors.getSneakers);
  const isEmpty = cartSneakers.length === 0;

  const { cnCart } = getClasses({ isEmpty });

  return (
    <>
      <section className={cnCart}>
        <YourBag isEmpty={isEmpty} sneakers={cartSneakers} />
        <OrderSummary isEmpty={isEmpty} sneakers={cartSneakers} />
      </section>

      <YouMayAlsoLike />
    </>
  );
};
