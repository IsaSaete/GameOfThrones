import { Character } from "../../types.js";
import getCharacterIcon from "./getCharacterEmoji.js";
import getCharacterPortrait from "./getCharacterPortrait.js";

const getCharacterCard = (character: Character): HTMLElement => {
  const CharacterCard = document.createElement("article");
  CharacterCard.className = "card-character";

  const containtInfo = document.createElement("div");
  containtInfo.className = "character__info";

  containtInfo.innerHTML = `
  <h2 class="character__name">${character.name} ${character.lastName}</h2>
  <span class="character__age">Age: ${character.age} years</span>
  `;

  CharacterCard.appendChild(containtInfo);

  const characterPortrait = getCharacterPortrait(character.portrait);
  CharacterCard.prepend(characterPortrait);

  const characterEmoji = getCharacterIcon(character);
  containtInfo.appendChild(characterEmoji);

  return CharacterCard;
};

export default getCharacterCard;
