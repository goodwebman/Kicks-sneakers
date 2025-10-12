import { LoginForm } from '@features/auth-form/ui/login-form/login-form';
import { RegisterForm } from '@features/auth-form/ui/register-form/register-form';
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
        onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
      >
        {mode === 'login' ? 'No account?' : 'Have an account?'}
      </Button>
    </div>
  );
};
