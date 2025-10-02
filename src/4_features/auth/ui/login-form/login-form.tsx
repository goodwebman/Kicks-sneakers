import { userSlice } from '@entities/user/model/slice';
import type { LoginData } from '@entities/user/model/types';
import { useLogin } from '@features/auth/model/use-login';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppSelector } from '@shared/redux/store';
import { Button } from '@shared/ui/buttons/button';
import { Input } from '@shared/ui/input/input';
import {
  loginSchema,
  type LoginFormValues,
} from '@shared/utils/validation/auth-schemas/login-schema';

import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { getClasses } from './styles/get-classes';

export const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors, touchedFields },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      password: '',
      email: '',
    },
  });

  const { handleLogin } = useLogin();

  const onSubmit = async (data: LoginData) => {
    try {
      await handleLogin(data);
      toast('Вы успешно вошли в аккаунт', {
        position: 'top-center',
      });
    } catch {
      toast('Ошибка входа в аккаунт', {
        position: 'top-center',
      });
    }
  };

  const authError = useAppSelector(userSlice.selectors.selectAuthError);
  const authStatus = useAppSelector(userSlice.selectors.selectAuthStatus);

  const { cnRoot } = getClasses();

  return (
    <form className={cnRoot} onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="email"
        control={control}
        title="Почта"
        placeholder="Введите почту"
        error={errors.email || authError}
        isError={!!errors.email}
        isSuccess={touchedFields.email && !errors.email && !authError}
      />

      <Input
        name="password"
        control={control}
        title="Пароль"
        placeholder="Введите пароль"
        security
        error={errors.password || authError}
        isError={!!errors.password || !!authError}
        isSuccess={touchedFields.password && !errors.password && !authError}
      />

      <Button type="submit" disabled={isSubmitting || authStatus === 'pending'}>
        {authStatus === 'pending' ? <p>Входим...</p> : <p>Войти в аккаунт</p>}
      </Button>
    </form>
  );
};
