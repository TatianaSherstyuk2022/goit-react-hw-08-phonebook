import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AuthForm } from 'components/AuthForm/AuthForm';

import { selectAuthError, selectIsLoggedIn } from 'redux/user/selectorsUser';
import { loginRequest } from 'redux/user/userSlice';

import s from './SingIn.module.css';

function SignInPage() {
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
      {error !== null && (
        <p className={s.text}>Sorry, an error occurred... {error}</p>
      )}
      <AuthForm onSubmit={handleLogin} isLoginForm />
    </div>
  );
}
export default SignInPage;
