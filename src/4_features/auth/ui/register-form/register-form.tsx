import type { AuthData } from '@entities/user/model/types';
import { useRegister } from '@features/auth/model/use-register';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@shared/ui/buttons/button';
import { Input } from '@shared/ui/input/input';
import {
  type RegisterFormValues,
  registerSchema,
} from '@shared/utils/validation/auth-schemas/register-schema';
import { useForm } from 'react-hook-form';
export const RegisterForm = () => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      password: '',
      email: '',
    },
  });

  const { handleRegister } = useRegister();

  const onSubmit = async (data: AuthData) => {
    try {
      await handleRegister(data);
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
        title={isSubmitting ? 'Регистрация...' : 'Зарегистрироваться'}
      />
    </form>
  );
};
