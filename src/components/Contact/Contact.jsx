import PropTypes from 'prop-types';
import s from './Contact.module.css'

export const Contact = ({ id, name, number, deleteContact }) => {
  return (
    <div>
      <h2 className="contactName">{name}</h2>
      <p className="contactNumber">Number: {number}</p>
      <button onClick={() => deleteContact(id)} type="button" className={s.btn}>
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
  deleteContact: PropTypes.func.isRequired,
};
