import { cartSlice } from '@entities/cart/model/slice';
import { OrderSummary } from '@entities/cart/ui/order-summary/order-summary';
import { YourBag } from '@entities/cart/ui/your-bag/your-bag';
import { useAppSelector } from '@shared/redux/store';

export const Cart = () => {
  const cartSneakers = useAppSelector(cartSlice.selectors.getSneakers);
  return (
    <section style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <YourBag sneakers={cartSneakers} />
      <OrderSummary sneakers={cartSneakers} />
    </section>
  );
};
