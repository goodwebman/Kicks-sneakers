import { cartSlice } from '@entities/cart/model/slice';
import { useAppSelector } from '@shared/redux/store';
import { OrderSummary } from '@widgets/order-summary/ui/order-summary';
import { YouMayAlsoLike } from '@widgets/you-may-also-like/you-may-also-like';
import { YourBag } from '@widgets/your-bag/your-bag';
import { getClasses } from './styles/get-classes';

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
