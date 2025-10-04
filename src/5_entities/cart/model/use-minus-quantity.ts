import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { minusQuantity } from './slice';

interface MinusQuantityPayload {
  sneakerId: number;
  color: string;
  size: number;
}

export const useMinusQuantity = () => {
  const dispatch = useDispatch();

  const handleMinus = useCallback(
    (payload: MinusQuantityPayload) => {
      dispatch(minusQuantity(payload));
    },
    [dispatch],
  );

  return { handleMinus };
};
