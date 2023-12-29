import './FilterDifficultyItem.css';
import { setDifficulty } from '../../actions/actions';
import PropTypes from 'prop-types';

function FilterDifficultyItem({ value, inButton, setIsActive }) {
  function handleClick() {
    setDifficulty(value);
    setIsActive(false);
  }
  return value === 0 ? (
    <li
      onClick={inButton ? null : handleClick}
      className={`filter-difficulty__graph-box ${
        inButton && 'filter-difficulty__graph-box_noncolored-bg'
      }`}
    >
      <span className='filter-difficulty__graph-text'>All difficulties</span>
    </li>
  ) : (
    <li
      onClick={inButton ? null : handleClick}
      className={`filter-difficulty__graph-box ${
        inButton && 'filter-difficulty__graph-box_noncolored-bg'
      }`}
    >
      <span className='filter-difficulty__graph filter-difficulty__graph_active'></span>
      <span
        className={`filter-difficulty__graph ${
          value > 1 && 'filter-difficulty__graph_active'
        }`}
      ></span>
      <span
        className={`filter-difficulty__graph ${
          value > 2 && 'filter-difficulty__graph_active'
        }`}
      ></span>
    </li>
  );
}
FilterDifficultyItem.propTypes = {
  value: PropTypes.number.isRequired,
  inButton: PropTypes.bool,
  setIsActive: PropTypes.func,
};
export default FilterDifficultyItem;
