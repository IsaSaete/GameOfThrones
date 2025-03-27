import { Character } from "../../character/types";

const getCharacterCard = (character: Character): HTMLElement => {
  const characterCardElement = document.createElement("article");
  characterCardElement.classList = "character-card";

  const characterInfoElement = document.createElement("div");
  characterInfoElement.classList = "character-info";

  characterCardElement.appendChild(characterInfoElement);

  characterInfoElement.innerHTML = `
  <h2 class="character-name" >${character.name} ${character.lastName}</h2>
`;

  return characterCardElement;
};

export default getCharacterCard;
