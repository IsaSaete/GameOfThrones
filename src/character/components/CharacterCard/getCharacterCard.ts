import { Character } from "../../types.js";
import getCharacterEmoji from "./getCharacterEmoji.js";
import getCharacterPortrait from "./getCharacterPortrait.js";
import getStateContainer from "./getStateContainer.js";

const getCharacterCard = (
  { name, lastName, age, portrait, isAlive, speak }: Character,
  handleGetOverlay: () => HTMLElement,
): HTMLElement => {
  const CharacterCard = document.createElement("article");
  CharacterCard.className = "character";

  const characterInfo = document.createElement("div");
  characterInfo.className = "character__info";

  characterInfo.innerHTML = `
  <h2 class="character__name">${name} ${lastName}</h2>
  <span class="character__age">Age: ${age} years</span>`;

  CharacterCard.appendChild(characterInfo);

  const stateContainer = getStateContainer(isAlive);
  const characterEmoji = getCharacterEmoji(speak());
  const characterPortrait = getCharacterPortrait(portrait, isAlive);
  const cardOverlay = handleGetOverlay();

  CharacterCard.prepend(characterPortrait);
  characterInfo.appendChild(stateContainer);
  stateContainer.appendChild(characterEmoji);
  CharacterCard.appendChild(cardOverlay);

  return CharacterCard;
};

export default getCharacterCard;
