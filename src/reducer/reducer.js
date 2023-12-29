import { combineReducers } from "redux";

export const reducer = combineReducers({
  champions: championsReducer,
  currentChampion: currentChampionReducer,
  currentDifficulty: currentDifficultyReducer,
  searchTag: setSearchTagReducer,
  currentChampionList: currentChampionListReducer,
  itemList: setItemListReducer,
});

function championsReducer(state = [], action) {
  switch (action.type) {
    case "CHARACTERS_LIST/SET":
      return action.payload;
    default:
      return state;
  }
}

function currentChampionReducer(state = {}, action) {
  switch (action.type) {
    case "CHARACTER/SET":
      return action.payload;
    default:
      return state;
  }
}

function currentChampionListReducer(state = [], action) {
  switch (action.type) {
    case "CHARACTERS_CURRENT_LIST/SET":
      return [...action.payload];
    default:
      return state;
  }
}

function currentDifficultyReducer(state = 0, action) {
  switch (action.type) {
    case "DIFFICULTY/SET":
      return action.payload;
    default:
      return state;
  }
}

function setSearchTagReducer(state = "All", action) {
  switch (action.type) {
    case "SEARCH_TAG/SET":
      return action.payload;
    default:
      return state;
  }
}

function setItemListReducer(state = [], action) {
  switch (action.type) {
    case "ITEM_LIST/SET":
      return action.payload;
    default:
      return state;
  }
}
