import { getHeader } from "../Header/getHeader.js";
import { characters } from "../../character/data.js";
import getCharacterCardsList from "../../character/components/CharacterCardsList/getCharacterCardsList.js";

export const getApp = (
  handleShowModal: (characterPhrase: string) => void,
): HTMLElement => {
  const App = document.createElement("div");
  App.classList.add("main-content");

  const Header = getHeader();

  const CharacterCardsList = getCharacterCardsList(characters, handleShowModal);

  App.appendChild(Header);
  App.appendChild(CharacterCardsList);

  return App;
};
