import React from 'react';
import './Filter.css';
import FilterInput from '../filter-input/FilterInput';
import { useSelector } from 'react-redux';
import {
  setDifficulty,
  setSearchTag,
  setCurrentChampionList,
} from '../../actions/actions';
import PropTypes from 'prop-types';
import FilterDifficulty from '../filter-difficulty/FilterDifficulty';
import FilterTags from '../filter-tags/FilterTags';

function Filter({ setIsFaded }) {
  const champions = useSelector((state) => state.champions);
  const difficulty = useSelector((state) => state.currentDifficulty);
  const searchTag = useSelector((state) => state.searchTag);

  React.useEffect(() => {
    searchTag.length && handleFilter();
  }, [searchTag, difficulty]);

  React.useEffect(() => {
    setDifficulty(0);
    setSearchTag('All');
  }, []);

  function getFilterData(text) {
    setSearchTag('');
    setDifficulty(0);
    setIsFaded(true);
    if (text.trim().length > 0) {
      const filteredArray = champions.filter((el) =>
        el.name.toLowerCase().includes(text.toLowerCase())
      );
      setTimeout(fadedFilterResults, 500, filteredArray);
      return;
    }
    setSearchTag('All');
    setDifficulty(0);
  }
  function fadedFilterResults(arr) {
    setCurrentChampionList(arr);
    setIsFaded(false);
  }
  function countChampionDifficulty() {
    switch (difficulty) {
      case 1:
        return [1, 2, 3];
      case 2:
        return [4, 5, 6, 7];
      case 3:
        return [8, 9, 10];
      default:
        return 0;
    }
  }
  const handleFilter = React.useCallback(() => {
    setIsFaded(true);
    let filteredArray = champions.filter((el) => el.tags.includes(searchTag));
    if (searchTag === 'All') {
      filteredArray = champions;
    }
    if (difficulty === 0) {
      setTimeout(
        fadedFilterResults,
        500,
        filteredArray.length ? filteredArray : champions
      );
      return;
    }
    const newFilteredArray = filteredArray.filter((el) =>
      countChampionDifficulty().includes(el.info.difficulty)
    );
    setTimeout(
      fadedFilterResults,
      500,
      newFilteredArray.length ? newFilteredArray : champions
    );
  }, [searchTag, difficulty]);

  return (
    <div className='filter-bar'>
      <div className='triangle triangle-top'></div>
      <div className='triangle triangle-bottom'></div>
      <FilterInput getFilterData={getFilterData} />
      <FilterTags />
      <FilterDifficulty />
    </div>
  );
}
Filter.propTypes = {
  setIsFaded: PropTypes.func.isRequired,
};
export default Filter;
