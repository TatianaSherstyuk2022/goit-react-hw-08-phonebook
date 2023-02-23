import React from 'react';
import { Container } from './Container/Container';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useState, useEffect } from 'react';

export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = contact => {
    if (contacts.some(c => c.name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    const finalContact = {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    };

    setContacts([finalContact, ...contacts]);
  };

  const handleFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={onAddContact} />

      <h2>Contacts</h2>
      {contacts.length > 1 && (
        <Filter value={filter} onFilterChange={handleFilter} />
      )}
      {contacts.length > 0 ? (
        <ContactList
          contacts={filteredContacts}
          deleteContact={deleteContact}
        />
      ) : (
        <p>Your phonebook is empty . Please add contact.</p>
      )}
    </Container>
  );
}
