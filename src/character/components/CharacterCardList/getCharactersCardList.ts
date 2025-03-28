import { Character } from "../../types";
import getCharacterCard from "../CharacterCard/getCharacterCard.js";

const getCharacterslist = (characters: Character[]): HTMLElement => {
  const characterList = document.createElement("ul");
  characterList.classList = "characters-list";

  characters.forEach((character) => {
    const characterWrapper = document.createElement("li");

    const CharacterCard = getCharacterCard(character);

    characterWrapper.appendChild(CharacterCard);

    characterList.appendChild(characterWrapper);
  });

  return characterList;
};

export default getCharacterslist;
