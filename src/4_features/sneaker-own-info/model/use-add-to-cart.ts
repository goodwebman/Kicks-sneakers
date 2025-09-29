import { addSneaker } from '@entities/cart/model/slice';
import type { CartItem } from '@entities/cart/model/types';
import { useAppDispatch } from '@shared/redux/store';

export const useAddToCart = () => {
  const dispatch = useAppDispatch();

  const handleAddSneaker = (item: CartItem) => {
    dispatch(addSneaker(item));
  };

  return { handleAddSneaker };
};
