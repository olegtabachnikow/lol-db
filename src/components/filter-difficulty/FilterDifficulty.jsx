import React from "react";
import FilterDifficultyItem from "../filter-difficulty-item/FilterDifficultyItem";
import "./FilterDifficulty.css";
import { useSelector } from "react-redux";

function FilterDifficulty() {
  const [isActive, setIsActive] = React.useState(false);
  const difficulty = useSelector((state) => state.currentDifficulty);
  return (
    <div className="filter-difficulty">
      <button
        onClick={() => setIsActive((state) => !state)}
        className="filter-difficulty__button"
      >
        {<FilterDifficultyItem value={difficulty} inButton={true} />}
      </button>
      <ul
        className={`filter-difficulty__list ${
          isActive && "filter-difficulty__list_active"
        }`}
      >
        <FilterDifficultyItem value={0} setIsActive={setIsActive}/>
        <FilterDifficultyItem value={1} setIsActive={setIsActive}/>
        <FilterDifficultyItem value={2} setIsActive={setIsActive}/>
        <FilterDifficultyItem value={3} setIsActive={setIsActive}/>
      </ul>
    </div>
  );
}

export default FilterDifficulty;
