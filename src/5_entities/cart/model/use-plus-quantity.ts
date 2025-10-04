import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { plusQuantity } from './slice';

interface PlusQuantityPayload {
  sneakerId: number;
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
