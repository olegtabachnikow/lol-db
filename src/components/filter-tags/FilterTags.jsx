import React from 'react';
import './FilterTags.css';
import { roleTags } from '../../constants/constants';
import FilterButton from '../filter-button/FilterButton';
import { useSelector } from 'react-redux';

function FilterTags() {
  const [isOpen, setIsOpen] = React.useState(false);
  const searchTag = useSelector((state) => state.searchTag);
  return (
    <div className='filter-tags__button-container'>
      <button
        onClick={() => setIsOpen((state) => !state)}
        className='filter-tags__current'
      >
        {searchTag || 'All'}
      </button>
      <ul
        className={`filter-tags__list ${isOpen && 'filter-tags__list_opened'}`}
      >
        {roleTags.map((el, i) => {
          return (
            <li className='filter-tags__list-item' key={i}>
              <FilterButton tag={el} setIsOpen={setIsOpen} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FilterTags;
