import { plusQuantity } from '@entities/cart/model/slice'
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';


interface PlusQuantityPayload {
  sneakerId: string;
  color: string;
  size: number;
}

export const usePlusQuantity = () => {
  const dispatch = useDispatch();

  const handlePlus = useCallback(
    (payload: PlusQuantityPayload) => {
      dispatch(plusQuantity(payload));
    },
    [dispatch],
  );

  return { handlePlus };
};
