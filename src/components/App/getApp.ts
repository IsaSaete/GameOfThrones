import { getHeader } from "../Header/getHeader.js";
import { characters } from "../../character/data.js";
import getCharacterslist from "../../character/components/CharacterCardList/getCharactersCardList.js";

export const getApp = (): HTMLElement => {
  const App = document.createElement("div");
  App.classList.add("main-content");

  const Header = getHeader();

  const CharacterCard = getCharacterslist(characters);

  App.appendChild(Header);
  App.appendChild(CharacterCard);

  return App;
};
