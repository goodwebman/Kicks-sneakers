import { createUser } from '@entities/user/model/thunks';
import type { RegisterData } from '@entities/user/model/types';
import { useAppDispatch } from '@shared/redux/store';
import { useCallback } from 'react';

export const useRegister = () => {
  const dispatch = useAppDispatch();
  const handleRegister = useCallback(
    async (data: RegisterData) => {
      const result = await dispatch(createUser(data));
      return result;
    },
    [dispatch],
  );

  return { handleRegister };
};
