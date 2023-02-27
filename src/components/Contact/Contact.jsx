import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/operations';

import s from './Contact.module.css';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const deleteName = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <h2 className="contactName">{name}</h2>
      <p className="contactNumber">Number: {number}</p>
      <button onClick={() => deleteName(id)} type="button" className={s.btn}>
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
