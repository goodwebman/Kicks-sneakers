import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { removeSneaker } from './slice';

interface RemoveSneakerPayload {
  sneakerId: number;
  color: string;
  size: number;
}

export const useRemoveSneaker = () => {
  const dispatch = useDispatch();

  const handleRemove = useCallback(
    (payload: RemoveSneakerPayload) => {
      dispatch(removeSneaker(payload));
    },
    [dispatch],
  );

  return { handleRemove };
};
