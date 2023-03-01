import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectStatus } from 'redux/selectorsUser';

export function AuthForm({ onSubmit, isLoginForm = false }) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const status = useSelector(selectStatus);

  const handleSubmit = event => {
    event.preventDefault();

    const formData = {
      ...(!isLoginForm && { name: nameInputRef.current.value }),
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };
    onSubmit(formData);

    event.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="form-title">{isLoginForm ? 'Sign In' : 'Sign Up'}</h2>
      {isLoginForm ? null : (
        <label className="input-group">
          <span>Name: </span>
          <input type="text" name="name" ref={nameInputRef} required />
        </label>
      )}
      <label className="input-group">
        <span>Email: </span>
        <input type="email" name="email" ref={emailInputRef} required />
      </label>
      <label className="input-group">
        <span>Password: </span>
        <input
          type="password"
          name="password"
          minLength={7}
          ref={passwordInputRef}
          required
        />
      </label>

      <button disabled={status === 'pending'} type="submit">
        {/* {status === 'pending' && <StyledFormLoader />} */}
        {isLoginForm ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
}

AuthForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
