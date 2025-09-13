import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Routes } from '../../../../6_shared/constants/routes';

export const PrivateOutlet = () => {
  const isAuthorized = false;
  const location = useLocation();

  if (!isAuthorized) {
    return <Navigate to={Routes.auth} state={{ from: location }} replace />;
  }

  return <Outlet />;
};
