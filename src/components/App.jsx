import React, { Suspense } from 'react';

import { NavLink, Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/HomePage/HomePage';
import { SignInPage } from 'pages/SingIn/SingIn';
import { SignUpPage } from 'pages/SingUp/SingUp';
import { ContactsPage } from 'pages/Contacts/Contacts';
import style from '../components/App.module.css';

export function App() {
  // const contacts = useSelector(selectContacts);

  return (
    <>
      <header>
        <div>
          <NavLink to="/" className={style.link}>
            Home
          </NavLink>
          <NavLink to="/contacts" className={style.link}>
            Contacts
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
