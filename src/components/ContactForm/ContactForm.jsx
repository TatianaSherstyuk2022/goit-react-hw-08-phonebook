import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

import s from './ContactForm.module.css';

export function ContactForm() {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onAddContact = e => {
    e.preventDefault();
    if (contacts.some(c => c.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const finalContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(finalContact));
    setName('');
    setNumber('');
  };

  const nameChange = e => {
    setName(e.currentTarget.value);
  };

  const numberChange = e => {
    setNumber(e.currentTarget.value);
  };

  return (
    <form onSubmit={onAddContact} className={s.form}>
      <div className="form-group">
        <label htmlFor="name" className={s.label}>
          Name
        </label>
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={nameChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="name" className={s.label}>
          Number
        </label>
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          onChange={numberChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <button type="submit" className={s.btn}>
        Add contact
      </button>
    </form>
  );
}
