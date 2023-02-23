import PropTypes from 'prop-types';
import s from './Filter.module.css'

export function Filter({ value, onFilterChange }) {
  return (
    <div style={{ margin: '20px auto', width: '500px' }}>
      <p>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        name="filterTerm"
        value={value}
        onChange={onFilterChange}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
