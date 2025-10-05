import { Outlet } from 'react-router-dom';
import { DefaultLayout } from '../../../layouts';

export const PublicOutlet = () => {
  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  );
};
