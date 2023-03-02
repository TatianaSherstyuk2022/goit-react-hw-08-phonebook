import { AuthForm } from 'components/AuthForm/AuthForm';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAuthError, selectIsLoggedIn } from 'redux/selectorsUser';
import { registerRequest } from 'redux/userSlice';

export function SignUpPage() {
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
      <AuthForm onSubmit={handleRegister} />
    </div>
  );
}
