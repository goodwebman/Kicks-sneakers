import { userSlice } from '@entities/user/model/slice';
import type { RegisterData } from '@entities/user/model/types';
import { useRegister } from '@features/auth-form/model/use-register';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppSelector } from '@shared/redux/store';
import { Button } from '@shared/ui/buttons/button';
import { Input } from '@shared/ui/input/input';
import {
  type RegisterFormValues,
  registerSchema,
} from '@shared/utils/validation/auth-schemas/register-schema';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { getClasses } from './styles/get-classes';
export const RegisterForm = () => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors, touchedFields },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      password: '',
      email: '',
      name: '',
    },
  });

  const { handleRegister } = useRegister();

  const onSubmit = async (data: RegisterData) => {
    try {
      await handleRegister(data);
      toast('Регистрация прошла успешно!', {
        position: 'top-center',
      });
    } catch {
      toast('Ошибка регистрации', {
        position: 'top-center',
      });
    }
  };

  const { cnRoot } = getClasses();

  const authError = useAppSelector(userSlice.selectors.selectAuthError);
  const authStatus = useAppSelector(userSlice.selectors.selectAuthStatus);

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
        name="name"
        control={control}
        title="Имя"
        placeholder="Введите имя"
        error={errors.name || authError}
        isError={!!errors.name}
        isSuccess={touchedFields.name && !errors.name && !authError}
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
        {authStatus === 'pending' ? 'Регистрация...' : 'Зарегистрироваться'}
      </Button>
    </form>
  );
};
