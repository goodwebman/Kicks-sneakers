import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Routes } from '../../../../6_shared/constants/routes';
import { DefaultLayout } from '../../../layouts';

export const PublicOutlet = () => {
  const isAuthorized = false;
  const location = useLocation();
  const navigateLink = location.state?.from?.pathname || Routes.root;

  if (isAuthorized) {
    return <Navigate to={navigateLink} state={{ from: location }} replace />;
  }

  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  );
};
