import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from 'components/ContactForm/ContactForm';
import WithAuthRedirect from 'components/HOC/WithAuthRedirect';
import { Loader } from 'components/Loader/Loader';

import {addContactRequest, deleteContactRequest, getContactsRequest} from 'redux/contacts/contactsSlice';
import {selectContactError, selectContacts, selectContactStatus, selectFilteredContacts} from 'redux/contacts/selectorContacts';
import { selectIsLoggedIn } from 'redux/user/selectorsUser';

import s from './Contacts.module.css';
import { Filter } from 'components/Filter/Filter';

function ContactsPage() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const contacts = useSelector(selectContacts);
  const status = useSelector(selectContactStatus);
  const error = useSelector(selectContactError);
  const filterContacts = useSelector(selectFilteredContacts);

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
      {status === 'pending' && <Loader />}
      {error !== null && (
        <p className={s.text}>Sorry, an error occurred... {error}</p>
      )}
      {contacts?.length > 1 && <Filter />}
      {filterContacts?.length > 0 && (
        <ul className={s.list}>
          {filterContacts?.map(contact => (
            <li key={contact.id} className={s.contact}>
              <p>
                <b>Name: </b>
                {contact.name}
              </p>
              <p>
                <b>Number: </b>
                {contact.number}
              </p>
              <button
                onClick={() => handleDeleteContact(contact.id)}
                className={s.btn}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default WithAuthRedirect(ContactsPage, '/sign-in');
