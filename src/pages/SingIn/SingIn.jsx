import { AuthForm } from 'components/AuthForm/AuthForm';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAuthError, selectIsLoggedIn } from 'redux/selectorsUser';
import { loginRequest } from 'redux/userSlice';

export function SignInPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const error = useSelector(selectAuthError);

  useEffect(() => {
    if (!isLoggedIn) return;

    navigate('/contacts');
  }, [isLoggedIn, navigate]);

  const handleLogin = formData => {
    dispatch(loginRequest(formData));
  };

  return (
    <div>
      <AuthForm onSubmit={handleLogin} isLoginForm />
    </div>
  );
}
