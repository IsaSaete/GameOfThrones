import { getHeader } from "../Header/getHeader.js";
import getCharacterCard from "../CharacterCard/getCharacterCard.js";

export const getApp = (): HTMLElement => {
  const App = document.createElement("div");
  App.classList.add("main-content");

  const Header = getHeader();
  const CharacterCard = getCharacterCard({
    name: "Daenerys",
    lastName: "Targaryen",
    age: 14,
    isAlive: false,
    portraitUrl: "/images/portrait/Joffrey_Baratheon.webp",
    portraitDescription: "Portrait of Joffrey Baratheon",
  });

  App.appendChild(Header);
  App.appendChild(CharacterCard);

  return App;
};
