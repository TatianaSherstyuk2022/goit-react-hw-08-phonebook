import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AuthForm } from 'components/AuthForm/AuthForm';

import { selectAuthError, selectIsLoggedIn } from 'redux/user/selectorsUser';
import { registerRequest } from 'redux/user/userSlice';

import s from './SignUp.module.css';

function SignUpPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const error = useSelector(selectAuthError);

  useEffect(() => {
    if (!isLoggedIn) return;

    navigate('/contacts');
  }, [isLoggedIn, navigate]);

  const handleRegister = formData => {
    dispatch(registerRequest(formData));
  };

  return (
    <div>
      {error !== null && (
        <p className={s.text}>Sorry, an error occurred... {error}</p>
      )}
      <AuthForm onSubmit={handleRegister} />
    </div>
  );
}

export default SignUpPage;
