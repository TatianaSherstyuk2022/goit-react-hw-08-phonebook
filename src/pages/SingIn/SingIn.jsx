import { AuthForm } from 'components/AuthForm/AuthForm';
import React from 'react';
import { useDispatch } from 'react-redux';
import { loginRequest } from 'redux/userSlice';

export function SingInPage() {
  const dispatch = useDispatch();

  const handleLogin = formData => {
    dispatch(loginRequest(formData));
  };

  return (
    <div>
      <AuthForm onSubmit={handleLogin} isLoginForm />
    </div>
  );
}
