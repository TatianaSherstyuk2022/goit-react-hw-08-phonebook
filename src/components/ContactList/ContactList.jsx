import React from 'react';
import { Contact } from 'components/Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';

export function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const filteredContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        {filteredContacts?.length > 0 ? (
          filteredContacts?.map(contact => {
            return <Contact key={contact.id} {...contact} />;
          })
        ) : (
          <p>Your phonebook is empty . Please add contact.</p>
        )}
      </div>
    </>
  );
}
