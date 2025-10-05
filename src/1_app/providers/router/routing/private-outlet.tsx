import { userSlice } from '@entities/user/model/slice';
import { useAppSelector } from '@shared/redux/store';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Routes } from '../../../../6_shared/constants/routes';
import { DefaultLayout } from '@app/layouts'

export const PrivateOutlet = () => {
  const location = useLocation();
  const authStatus = useAppSelector(userSlice.selectors.selectAuthStatus);
  const isAuthorized = authStatus === 'succeeded';
  if (!isAuthorized) {
    return <Navigate to={Routes.auth} state={{ from: location }} replace />;
  }

  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  );
};
