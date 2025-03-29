import { Character } from "../../types";
import getCharacterCard from "../CharacterCard/getCharacterCard.js";
import getCardOverlay from "../CharacterCard/getCardOverlay.js";

const getCharacterCardsList = (characters: Character[]): HTMLElement => {
  const CharacterCardsList = document.createElement("ul");
  CharacterCardsList.classList = "characters";

  characters.forEach((character) => {
    const characterWrapper = document.createElement("li");

    const handleGetOverlay = () => getCardOverlay(character);
    const CharacterCard = getCharacterCard(character, handleGetOverlay);

    characterWrapper.appendChild(CharacterCard);
    CharacterCardsList.appendChild(characterWrapper);
  });

  return CharacterCardsList;
};

export default getCharacterCardsList;
