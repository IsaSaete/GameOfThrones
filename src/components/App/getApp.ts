import { getHeader } from "../Header/getHeader.js";
import getCharacterCard from "../CharacterCard/getCharacterCard.js";
import { characters } from "../../character/data.js";

export const getApp = (): HTMLElement => {
  const App = document.createElement("div");
  App.classList.add("main-content");

  const Header = getHeader();

  const CharacterCard = getCharacterCard(characters[0]);

  App.appendChild(Header);
  App.appendChild(CharacterCard);

  return App;
};
