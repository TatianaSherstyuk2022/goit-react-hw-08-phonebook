import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { selectStatus } from 'redux/selectorsUser';

function ContactForm({ onSubmit }) {
  const nameInputRef = useRef();
  const phoneInputRef = useRef();
  const status = useSelector(selectStatus);

  const handleSubmit = event => {
    event.preventDefault();

    const formData = {
      name: nameInputRef.current.value,
      number: phoneInputRef.current.value,
    };
    onSubmit(formData);

    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="form-title">Add contact</h2>
      <label className="input-group">
        <span>Name: </span>
        <input
          type="text"
          name="name"
          placeholder={'Tetiana'}
          ref={nameInputRef}
          required
        />
      </label>
      <label className="input-group">
        <span>Number: </span>
        <input
          type="text"
          name="phone"
          placeholder={'+12-345-67-89'}
          ref={phoneInputRef}
          required
        />
      </label>
      <button
        className="form-btn"
        disabled={status === 'pending'}
        type="submit"
      >
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
