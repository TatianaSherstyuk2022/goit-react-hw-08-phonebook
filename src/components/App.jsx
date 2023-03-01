import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

import { Container } from './Container/Container';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { NavLink, Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/HomePage/HomePage';
import { SingInPage } from 'pages/SingIn/SingIn';
import { SingUpPage } from 'pages/SingUp/SingUp';

export function App() {
  // const contacts = useSelector(selectContacts);

  return (
    <Container>
      <header>
        <nav>
          <NavLink to="/">Contacts</NavLink>
          <NavLink to="/sign-in">Sign In</NavLink>
          <NavLink to="/sign-up">Sign Up</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<SingInPage />} />
          <Route path="/sing-in" element={<SingInPage />} />
          <Route path="/sing-up" element={<SingUpPage />} />
        </Routes>
        {/* <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts?.length > 1 && <Filter />}
      <ContactList /> */}
      </main>
    </Container>
  );
}
