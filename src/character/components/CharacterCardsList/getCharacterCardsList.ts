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

      const newCharacterCardsList = getCharacterCardsList(characters);
      CharacterCardsList.replaceWith(newCharacterCardsList);
    };

    const handleSpeakCharacter = () => {
      /* eslint-disable */

      console.log(character.speak());

      /* eslint-enable */
    };

    const handleGetOverlay = () =>
      getCardOverlay(character, handleKillCharacter, handleSpeakCharacter);

    const CharacterCard = getCharacterCard(character, handleGetOverlay);

    characterWrapper.appendChild(CharacterCard);
    CharacterCardsList.appendChild(characterWrapper);
  });

  return CharacterCardsList;
};

export default getCharacterCardsList;
