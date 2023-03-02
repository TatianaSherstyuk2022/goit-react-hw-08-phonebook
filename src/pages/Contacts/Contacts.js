
import ContactForm from 'components/ContactForm/ContactForm';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactRequest, deleteContactRequest, getContactsRequest } from 'redux/contacts/contactsSlice';
import { selectContactError, selectContacts, selectContactStatus } from 'redux/contacts/selectorContacts';
import { selectIsLoggedIn } from 'redux/selectorsUser';

function ContactsPage() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const contacts = useSelector(state => state.contacts.contacts);
  const status = useSelector(selectContactStatus);
  const error = useSelector(selectContactError);

  useEffect(() => {
    if (!isLoggedIn) return;

    dispatch(getContactsRequest());
  }, [isLoggedIn, dispatch]);

  const handleSubmit = formData => {
    dispatch(addContactRequest(formData));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContactRequest(contactId));
  };

  return (
    <div>
      <ContactForm onSubmit={handleSubmit} />
      {contacts?.length > 0 && (
        <ul>
          {contacts?.map(contact => (
            <li key={contact.id}>
              <p>
                <b>Name: </b>
                {contact.name}
              </p>
              <p>
                <b>Number: </b>
                {contact.number}
              </p>
              <button onClick={() => handleDeleteContact(contact.id)}>
                &times;
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContactsPage;