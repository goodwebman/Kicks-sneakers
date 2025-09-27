import { LoginForm } from '@features/auth/ui/login-form/login-form';
import { RegisterForm } from '@features/auth/ui/register-form/register-form';
import { Button } from '@shared/ui/buttons/button';
import { useState } from 'react';

export const AuthSwitcher = () => {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  return (
    <div>
      {mode === 'login' ? <LoginForm /> : <RegisterForm />}
      <Button
        title={
          mode === 'login' ? 'No account? Register' : 'Have account? Login'
        }
        onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
      />
    </div>
  );
};
