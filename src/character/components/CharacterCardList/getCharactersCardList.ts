import { Character } from "../../types";
import getCharacterCard from "../CharacterCard/getCharacterCard.js";
import getCardOverlay from "../CharacterCard/getCardOverlay.js";

const getCharacterslist = (characters: Character[]): HTMLElement => {
  const CharactersList = document.createElement("ul");
  CharactersList.classList = "characters";

  characters.forEach((character) => {
    const characterWrapper = document.createElement("li");

    const handleGetOverlay = () => getCardOverlay(character);
    const CharacterCard = getCharacterCard(character, handleGetOverlay);

    characterWrapper.appendChild(CharacterCard);
    CharactersList.appendChild(characterWrapper);
  });

  return CharactersList;
};

export default getCharacterslist;
