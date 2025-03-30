import { Character } from "../../types";
import getCharacterCard from "../CharacterCard/getCharacterCard.js";
import getCardOverlay from "../CharacterCard/getCardOverlay.js";

const getCharacterCardsList = (characters: Character[]): HTMLElement => {
  const CharacterCardsList = document.createElement("ul");
  CharacterCardsList.classList = "characters";

  characters.forEach((character) => {
    const characterWrapper = document.createElement("li");

    const handleKillCharacter = () => {
      character.kill();

      const characterPosition = characters.findIndex(
        (thisCharacter) => thisCharacter.name === character.name,
      );

      characters.splice(characterPosition, 0);

      const newCharacterCardsList = getCharacterCardsList(characters);
      CharacterCardsList.replaceWith(newCharacterCardsList);
    };

    const handleGetOverlay = () =>
      getCardOverlay(character, handleKillCharacter);

    const CharacterCard = getCharacterCard(character, handleGetOverlay);

    characterWrapper.appendChild(CharacterCard);
    CharacterCardsList.appendChild(characterWrapper);
  });

  return CharacterCardsList;
};

export default getCharacterCardsList;
