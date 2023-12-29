import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ChampionsList from "../champions-list/ChampionsList";
import { setCharacters } from "../../actions/actions";
import { getChampions } from "../../utils/riot-api";
import ChampionPage from "../champion-page/ChampionPage";
import ErrorPage from "../error-page/ErrorPage";
import "./App.css";
import ItemList from "../item-list/ItemList";
import MainPage from "../main-page/MainPage";
import Ahri from "../ahri/Ahri";
import Header from "../header/Header";

function App() {
  const [isVisited, setIsVisited] = React.useState(false);
  const location = useLocation();
  function getAllChampions() {
    getChampions()
      .then((res) => {
        const characterList = Object.keys(res.data).map((key) => {
          return res.data[key];
        });
        setCharacters(characterList);
      })
      .catch((err) => console.log(err));
  }
  React.useEffect(() => {
    getAllChampions();
  }, []);
  return (
    <div
      className={`app ${
        location.pathname === "/champions/" && "app_color_white"
      }`}
    >
      <Header />
      <main className="app__main">
        <Routes>
          <Route
            path="/"
            element={
              <MainPage>
                <Ahri isVisited={isVisited} setIsVisited={setIsVisited}/>
              </MainPage>
            }
          />
          <Route path="/items" element={<ItemList />} />
          <Route path="/champions" element={<ChampionsList />} />
          <Route path="/champions/:championName" element={<ChampionPage />} />
          <Route path="/error-page" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
