import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

import { Container } from './Container/Container';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export function App() {
  const contacts = useSelector(selectContacts);

  return (
    <Container>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts?.length > 1 && <Filter />}
      <ContactList />
    </Container>
  );
}
