import { DefaultLayout } from '@app/layouts';
import { userSlice } from '@entities/user/model/slice';
import { useAppSelector } from '@shared/redux/store';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Routes } from '../../../../6_shared/constants/routes';

export const AdminOutlet = () => {
  const location = useLocation();
  const user = useAppSelector(userSlice.selectors.selectUser);

  const isAuthorized = !!user;
  const isAdmin = user?.permission === 'admin';

  if (!isAuthorized) {
    return <Navigate to={Routes.auth} state={{ from: location }} replace />;
  }

  if (!isAdmin) {
    return <Navigate to={Routes.root} replace />;
  }

  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  );
};
