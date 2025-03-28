import { Character } from "../../types.js";
import getCharacterPortrait from "./getCharacterPortrait.js";

const getCharacterCard = ({
  name,
  lastName,
  age,
  portrait,
}: Character): HTMLElement => {
  const CharacterCard = document.createElement("article");
  CharacterCard.classList = "character";

  CharacterCard.innerHTML = `
  <div class="character__info">
  <h2 class="character__name">${name} ${lastName}</h2>
  <span class="character__age">Age: ${age} years</span>
  </div>
  `;

  const characterPortrait = getCharacterPortrait(portrait);
  CharacterCard.prepend(characterPortrait);

  return CharacterCard;
};

export default getCharacterCard;
