import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, Routes } from 'react-router-dom';

import { selectIsLoggedIn, selectUserData } from 'redux/user/selectorsUser';
import { getCurrentUserRequest, logOutRequest } from 'redux/user/userSlice';
import { Container } from './Container/Container';
import { Loader } from './Loader/Loader';

import style from '../components/App.module.css';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const SignInPage = lazy(() => import('pages/SingIn/SingIn'));
const SignUpPage = lazy(() => import('pages/SingUp/SingUp'));
const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));

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
    <Container>
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
              <span>{userData.email}</span>
              <button onClick={handleLogOut} className={style.link}>
                Logout
              </button>
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

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
        </Routes>
      </Suspense>
    </Container>
  );
}
