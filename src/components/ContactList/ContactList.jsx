import React from 'react';
import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';

export function ContactList({ deleteContact }) {
  const contacts = useSelector(state => state.contactData.contacts);
  const filter = useSelector(state => state.contactData.filter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase())
  );

  return (
    <>
      <div>
        {filteredContacts.length > 0 ? (
          filteredContacts.map(contact => {
            return (
              <Contact
                key={contact.id}
                deleteContact={deleteContact}
                {...contact}
              />
            );
          })
        ) : (
          <p>Your phonebook is empty . Please add contact.</p>
        )}
      </div>
    </>
  );
}
