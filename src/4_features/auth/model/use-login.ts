import { loginUser } from '@entities/user/model/thunks';
import type { AuthData } from '@entities/user/model/types'
import { useAppDispatch } from '@shared/redux/store';
import { useCallback } from 'react';

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const handleLogin = useCallback(
    async (data: AuthData) => {
      return await dispatch(loginUser(data));
    },
    [dispatch],
  );

  return { handleLogin };
};
