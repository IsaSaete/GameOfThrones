import { getHeader } from "../Header/getHeader.js";
import getCharacterCard from "../CharacterCard/getCharacterCard.js";
import getCharacter from "../../character/factory/getCharacter.js";

export const getApp = (): HTMLElement => {
  const App = document.createElement("div");
  App.classList.add("main-content");

  const Header = getHeader();

  const character = getCharacter("Daenerys", "Targaryen", 14, {
    url: "/images/portrait/Joffrey_Baratheon.webp",
    description: "Portrait of Joffrey Baratheon",
  });
  const CharacterCard = getCharacterCard(character);

  App.appendChild(Header);
  App.appendChild(CharacterCard);

  return App;
};
