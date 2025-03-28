import { Character } from "../../character/types";

const getCharacterCard = (character: Character): HTMLElement => {
  const characterCardElement = document.createElement("article");
  characterCardElement.classList = "character-card";

  characterCardElement.innerHTML = `
  <div class="character-card__info">
    <h2 class="character-name">${character.name} ${character.lastName}</h2>
    <span class="character-card__age">Age: ${character.age} years</span>
  </div>
  `;

  return characterCardElement;
};

export default getCharacterCard;
