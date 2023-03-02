import React, { Suspense, useEffect } from 'react';

import { NavLink, Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/HomePage/HomePage';
import { SignInPage } from 'pages/SingIn/SingIn';
import { SignUpPage } from 'pages/SingUp/SingUp';
import style from '../components/App.module.css';
import ContactsPage from 'pages/Contacts/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserData } from 'redux/selectorsUser';
import { getCurrentUserRequest, logOutRequest } from 'redux/userSlice';

export function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userData = useSelector(selectUserData);

  const handleLogOut = () => {
    dispatch(logOutRequest());
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    dispatch(getCurrentUserRequest());
  }, [dispatch]);

  return (
    <>
      <header>
        {isLoggedIn ? (
          <>
            <div>
              <NavLink to="/" className={style.link}>
                Home
              </NavLink>
              <NavLink to="/contacts" className={style.link}>
                Contacts
              </NavLink>
            </div>
            <div>
              <span>Hello, {userData.name}</span>
              <button onClick={handleLogOut}>Logout</button>
            </div>
          </>
        ) : (
          <>
            <div>
              <NavLink to="/" className={style.link}>
                Home
              </NavLink>
            </div>
            <div>
              <NavLink to="/sign-in" className={style.link}>
                Sign In
              </NavLink>
              <NavLink to="/sign-up" className={style.link}>
                Sign Up
              </NavLink>
            </div>
          </>
        )}
      </header>

      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
