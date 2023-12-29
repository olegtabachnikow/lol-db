import './FilterInput.css';
import PropTypes from 'prop-types';
import searchIcon from '../../images/search-icon.svg';

function FilterInput({ getFilterData }) {
  const debounce = (fn, delay) => {
    let timerId;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => fn(...args), delay);
    };
  };
  const debouncedHandler = debounce(
    (evt) => getFilterData(evt.target.value.toLowerCase()),
    1000
  );
  return (
    <div className='filter-label'>
      <img className='filter-icon' src={searchIcon} alt='search' />
      <input
        className='filter-input'
        type='text'
        onKeyUp={debouncedHandler}
        placeholder='Search'
      />
    </div>
  );
}
FilterInput.propTypes = {
  getFilterData: PropTypes.func.isRequired,
};

export default FilterInput;
