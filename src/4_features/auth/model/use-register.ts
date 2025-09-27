import { createUser } from '@entities/user/model/thunks';
import type { AuthData } from '@entities/user/model/types';
import { useAppDispatch } from '@shared/redux/store';
import { useCallback } from 'react';

export const useRegister = () => {
  const dispatch = useAppDispatch();
  const handleRegister = useCallback(
    async (data: AuthData) => {
      const result = await dispatch(createUser(data));
      return result;
    },
    [dispatch],
  );

  return { handleRegister };
};
