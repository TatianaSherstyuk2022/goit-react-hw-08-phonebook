import { AuthForm } from 'components/AuthForm/AuthForm';
import React from 'react';
import { useDispatch } from 'react-redux';
import { registerRequest } from 'redux/userSlice';

export function SingUpPage() {
  const dispatch = useDispatch();

  const handleRegister = formData => {
    dispatch(registerRequest(formData));
  };

  return (
    <div>
      <AuthForm onSubmit={handleRegister} />
    </div>
  );
}
