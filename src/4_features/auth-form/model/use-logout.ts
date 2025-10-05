import { logoutUser } from '@entities/user/model/thunks';
import { useAppDispatch } from '@shared/redux/store';
import { useCallback } from 'react';

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const handleLogout = useCallback(async () => {
    const result = await dispatch(logoutUser());
    return result;
  }, [dispatch]);

  return { handleLogout };
};
