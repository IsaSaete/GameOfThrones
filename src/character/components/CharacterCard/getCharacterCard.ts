import { Character } from "../../types.js";
import getCharacterPortrait from "./getCharacterPortrait.js";

const getCharacterCard = ({
  name,
  lastName,
  age,
  portrait,
  isAlive
}: Character): HTMLElement => {
  const CharacterCard = document.createElement("article");
  CharacterCard.className = "card-character";

  let iconUrl = "/images/icons/alive.svg"
  let iconDescription = "Thumb up icon"

  if (!isAlive) {
    iconUrl = "/images/icons/dead.svg";
    iconDescription = "thumb down icon";
  }

  CharacterCard.innerHTML = `
  <div class="character__info">
    <h2 class="character__name">${name} ${lastName}</h2>
    <span class="character__age">Age: ${age} years</span>
    <div class="character__state-container">
      <span class="character__state">State:</span>
      <img class="character__state-icon"src=${iconUrl} alt="${iconDescription}" width="18" height="18">
    </div>
  </div>
  `;

  const characterPortrait = getCharacterPortrait(portrait);
  CharacterCard.prepend(characterPortrait);

  if (!isAlive) {
    characterPortrait.classList.add("character__portrait--reverse");
    portrait.description = `Portrait of ${name} ${lastName} upside down`
  }

  return CharacterCard;
};

export default getCharacterCard;
