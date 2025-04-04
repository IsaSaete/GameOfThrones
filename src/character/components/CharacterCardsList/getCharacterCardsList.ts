import { Character } from "../../types";
import getCharacterCard from "../CharacterCard/getCharacterCard.js";
import getCardOverlay from "../CharacterCard/getCardOverlay.js";

const getCharacterCardsList = (
  characters: Character[],
  handleShowModal: (characterPhrase: string) => void,
): HTMLElement => {
  const CharacterCardsList = document.createElement("ul");
  CharacterCardsList.classList = "characters";

  characters.forEach((character) => {
    const characterWrapper = document.createElement("li");

    const handleKillCharacter = () => {
      character.kill();

      const newCharacterCardsList = getCharacterCardsList(
        characters,
        handleShowModal,
      );
      CharacterCardsList.replaceWith(newCharacterCardsList);
    };

    const handleSpeakCharacter = () => {
      handleShowModal(character.speak());
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
