import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'redux/filterSlice';
import s from './Filter.module.css';

export function Filter() {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.contactData.filter);
  const handleFilter = ({ target: { value } }) => {
    dispatch(addFilter(value));
  };
  return (
    <div style={{ margin: '20px auto', width: '500px' }}>
      <p>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        name="filterTerm"
        value={filter}
        onChange={handleFilter}
      />
    </div>
  );
}
