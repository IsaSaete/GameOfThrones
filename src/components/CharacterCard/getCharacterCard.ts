import { Character } from "../../character/types";
import getCharacterPortrait from "./getCharacterPortrait.js";

const getCharacterCard = ({
  name,
  lastName,
  portrait,
}: Character): HTMLElement => {
  const CharacterCard = document.createElement("article");
  CharacterCard.classList = "character";

  const characterPortrait = getCharacterPortrait(portrait);
  CharacterCard.appendChild(characterPortrait);

  const characterInfo = document.createElement("div");
  characterInfo.className = "character__info";
  CharacterCard.appendChild(characterInfo);

  characterInfo.innerHTML = `
    <h2 class="character__name" >${name} ${lastName}</h2>
  `;

  return CharacterCard;
};

export default getCharacterCard;
