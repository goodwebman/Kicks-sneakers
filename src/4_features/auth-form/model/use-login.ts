import { loginUser } from '@entities/user/model/thunks';
import type { LoginData } from '@entities/user/model/types';
import { useAppDispatch } from '@shared/redux/store';
import { useCallback } from 'react';

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const handleLogin = useCallback(
    async (data: LoginData) => {
      return await dispatch(loginUser(data)).unwrap();
    },
    [dispatch],
  );

  return { handleLogin };
};
