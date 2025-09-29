import { LoginForm } from '@features/auth/ui/login-form/login-form';
import { RegisterForm } from '@features/auth/ui/register-form/register-form';
import { Button } from '@shared/ui/buttons/button';
import { useState } from 'react';
import { getClasses } from './styles/get-classes';

export const AuthSwitcher = () => {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const { cnRoot } = getClasses();
  return (
    <div className={cnRoot}>
      {mode === 'login' ? <LoginForm /> : <RegisterForm />}
      <Button
        variant="secondary"
        fullWidth
        title={
          mode === 'login'
            ? 'Нет аккаунта?'
            : 'Есть аккаунт?'
        }
        onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
      />
    </div>
  );
};
