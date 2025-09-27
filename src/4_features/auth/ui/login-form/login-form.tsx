import type { AuthData } from '@entities/user/model/types';
import { useLogin } from '@features/auth/model/use-login';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@shared/ui/buttons/button';
import { Input } from '@shared/ui/input/input';
import { loginSchema } from '@shared/utils/validation/auth-schemas/login-schema';
import { type RegisterFormValues } from '@shared/utils/validation/auth-schemas/register-schema';
import { useForm } from 'react-hook-form';
export const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      password: '',
      email: '',
    },
  });
  const { handleLogin } = useLogin();

  const onSubmit = async (data: AuthData) => {
    try {
      console.log('пробуем войти');
      await handleLogin(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="email"
        control={control}
        title="Почта"
        placeholder="Введите почту"
      />

      <Input
        name="password"
        control={control}
        title="Пароль"
        placeholder="Введите пароль"
        security
      />

      <Button
        type="submit"
        disabled={isSubmitting}
        title={isSubmitting ? 'Входим...' : 'Войти в аккаунт'}
      />
    </form>
  );
};
