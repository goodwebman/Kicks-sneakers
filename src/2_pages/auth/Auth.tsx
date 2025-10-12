import { userSlice } from '@entities/user/model/slice';
import UserInfo from '@entities/user/ui/user-info/user-info';
import { useLogout } from '@features/auth-form/model/use-logout';
import { useAppSelector } from '@shared/redux/store';
import { Button } from '@shared/ui/buttons/button';
import { AuthSwitcher } from '@widgets/auth-switcher/auth-switcher';
import toast from 'react-hot-toast';
import { getClasses } from './styles/get-classes';

export const Auth = () => {
  const user = useAppSelector(userSlice.selectors.selectUser);
  const { handleLogout } = useLogout();

  const logoutAction = () => {
    handleLogout();
    toast.success('You have successfully logged out of your account.', {
      position: 'top-center',
    });
  };
  const { cnRoot } = getClasses();
  return (
    <section className={cnRoot}>
      {!user && <AuthSwitcher />}

      {user && (
        <>
          <UserInfo
            name={user?.name}
            email={user?.email}
            permisson={user?.permission}
          />
          <Button fullWidth onClick={logoutAction} variant={'secondary'}>
            Log out
          </Button>
        </>
      )}
    </section>
  );
};
