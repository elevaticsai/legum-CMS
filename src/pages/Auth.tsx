import React, { useState } from 'react';
import { AuthLayout } from '../components/auth/AuthLayout';
import { LoginForm } from '../components/auth/LoginForm';
import { RegisterForm } from '../components/auth/RegisterForm';
import { ForgotPasswordForm } from '../components/auth/ForgotPasswordForm';

type AuthView = 'login' | 'register' | 'forgot-password';

interface AuthProps {
  onAuthSuccess: () => void;
}

export const Auth: React.FC<AuthProps> = ({ onAuthSuccess }) => {
  const [view, setView] = useState<AuthView>('login');

  const handleLogin = (email: string, password: string) => {
    // TODO: Implement actual login logic
    console.log('Login:', { email, password });
    onAuthSuccess();
  };

  const handleRegister = (name: string, email: string, password: string) => {
    // TODO: Implement actual registration logic
    console.log('Register:', { name, email, password });
    setView('login');
  };

  const handleResetPassword = (email: string) => {
    // TODO: Implement actual password reset logic
    console.log('Reset password:', { email });
    setView('login');
  };

  return (
    <AuthLayout>
      {view === 'login' && (
        <LoginForm
          onLogin={handleLogin}
          onSwitchToRegister={() => setView('register')}
          onSwitchToForgotPassword={() => setView('forgot-password')}
        />
      )}
      {view === 'register' && (
        <RegisterForm
          onRegister={handleRegister}
          onSwitchToLogin={() => setView('login')}
        />
      )}
      {view === 'forgot-password' && (
        <ForgotPasswordForm
          onResetPassword={handleResetPassword}
          onSwitchToLogin={() => setView('login')}
        />
      )}
    </AuthLayout>
  );
};