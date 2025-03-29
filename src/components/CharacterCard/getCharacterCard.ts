import { Character } from "../../character/types";

const getCharacterCard = (character: Character): HTMLElement => {
  const characterCardElement = document.createElement("article");
  characterCardElement.classList = "character-card";

  let iconUrl = "/images/icons/alive.svg"
  let iconDescription = "Thumb up icon"

  if (!character.isAlive) {
    iconUrl = "/images/thumb-down-fill.svg";
    iconDescription = "thumb down icon";
  }

  characterCardElement.innerHTML = `
  <div class="character-card__info">
    <h2 class="character-name">${character.name} ${character.lastName}</h2>
    <span class="character-card__age">Age: ${character.age} years</span>
    <div class="character-card__state">
      <span class="character-card__state">State:</span>
      <img src=${iconUrl} alt="${iconDescription}" width="20" height="20">
    </div>
  </div>
  `;

  return characterCardElement;
};

export default getCharacterCard;
