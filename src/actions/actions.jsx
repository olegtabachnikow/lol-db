import { bindActionCreators } from "redux";
import { dispatch } from "../store/store";

const setCharactersAction = (payload) => {
  return {
    type: "CHARACTERS_LIST/SET",
    payload,
  };
};

const setCharacterAction = (payload) => {
  return {
    type: "CHARACTER/SET",
    payload,
  };
};

const setCurrentDifficultyAction = (payload) => {
  return {
    type: "DIFFICULTY/SET",
    payload,
  };
};

const setSearchTagAction = (payload) => {
  return {
    type: "SEARCH_TAG/SET",
    payload,
  };
};

const setCurrentChampionListAction = (payload) => {
  return {
    type: "CHARACTERS_CURRENT_LIST/SET",
    payload,
  };
};

const setItemListAction = (payload) => {
  return {
    type: "ITEM_LIST/SET",
    payload,
  };
};

export const {
  setCharacters,
  setCharacter,
  setDifficulty,
  setSearchTag,
  setCurrentChampionList,
  setItemList,
} = bindActionCreators(
  {
    setItemList: setItemListAction,
    setCharacters: setCharactersAction,
    setCharacter: setCharacterAction,
    setDifficulty: setCurrentDifficultyAction,
    setSearchTag: setSearchTagAction,
    setCurrentChampionList: setCurrentChampionListAction,
  },
  dispatch
);
