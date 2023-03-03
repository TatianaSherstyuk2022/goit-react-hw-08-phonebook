import React from 'react';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/selectorsUser';

import s from './HomePage.module.css';

function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={s.container}>
      <div className={s.box}>
        <div className={s.textbox}>
          <p className={s.textone}>Your </p>
          <p className={s.texttwo}>private</p>
        </div>
        <h1 className={s.text}> PhoneBook</h1>
      </div>
      {isLoggedIn ? null : (
        <h2 className={s.infotext}>
          To start using{' '}
          <a href="/goit-react-hw-08-phonebook/sign-in">Sign in</a> or{' '}
          <a href="/goit-react-hw-08-phonebook/sign-up">Sign Up</a>
        </h2>
      )}
    </div>
  );
}

export default HomePage;
