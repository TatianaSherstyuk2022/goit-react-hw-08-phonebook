import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';
import { selectFilter } from 'redux/selectors';
// import { addFilter } from 'redux/filterSlice';
import s from './Filter.module.css';

export function Filter() {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <div style={{ margin: '20px auto', width: '500px' }}>
      <p>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        name="name"
        value={filter}
        onChange={handleFilter}
        autoComplete="off"
      />
    </div>
  );
}
