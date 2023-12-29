import React from "react";
import "./ChampionsList.css";
import CharacterGridItem from "../character-grid-item/CharacterGridItem";
import { useSelector } from "react-redux";
import Filter from "../filter/Filter";
import Preloader from "../preloader/Preloader";

function ChampionsList() {
  const currentChampionList = useSelector((state) => state.currentChampionList);
  const [faded, setIsFaded] = React.useState(false);
  const champions = useSelector((state) => state.champions);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const loadTimeout = setTimeout(setIsLoading, 2000, false);
    return () => clearTimeout(loadTimeout);
  }, []);

  return (
    <div className="champion-list__main">
      {isLoading && (
        <div className="champion-list__preloader-overlay">
          <Preloader />
        </div>
      )}
      <Filter setIsFaded={setIsFaded} />
      <section className={`champion-list ${faded && "champion-list_faded"}`}>
        {currentChampionList.length
          ? currentChampionList.map((el) => (
              <CharacterGridItem key={el.key} item={el} />
            ))
          : champions.map((el) => <CharacterGridItem key={el.key} item={el} />)}
      </section>
    </div>
  );
}

export default ChampionsList;
