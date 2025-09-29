import { cartSlice } from '@entities/cart/model/slice';
import { YourBag } from '@entities/cart/ui/your-bag/your-bag';
import { useAppSelector } from '@shared/redux/store';

export const Cart = () => {
  const cartSneakers = useAppSelector(cartSlice.selectors.getSneakers);
  return (
    <section>
      <YourBag sneakers={cartSneakers} />
    </section>
  );
};
