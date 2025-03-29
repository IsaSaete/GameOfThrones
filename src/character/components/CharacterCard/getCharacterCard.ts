import { Character } from "../../types.js";
import getCharacterEmoji from "./getCharacterEmoji.js";
import getCharacterPortrait from "./getCharacterPortrait.js";

const getCharacterCard = ({
  name,
  lastName,
  age,
  portrait,
  isAlive,
  speak
}: Character): HTMLElement => {
  const CharacterCard = document.createElement("article");
  CharacterCard.className = "card-character";

  let iconUrl = "/images/icons/alive.svg"
  let iconDescription = "Thumb up icon"

  if (!isAlive) {
    iconUrl = "/images/icons/dead.svg";
    iconDescription = "thumb down icon";
  }

  const containtInfo = document.createElement("div");
  containtInfo.className = "character__info";

  containtInfo.innerHTML = `
    <h2 class="character__name">${name} ${lastName}</h2>
    <span class="character__age">Age: ${age} years</span>`


  CharacterCard.appendChild(containtInfo);

  const stateContainer = document.createElement("div");
  stateContainer.classList.add("character__state-container");

  stateContainer.innerHTML = `
    <span class="character__state">State: <img class="character__state-icon"src=${iconUrl} alt="${iconDescription}" width="18" height="18"></span>
    `

  containtInfo.appendChild(stateContainer);

  const characterEmoji = getCharacterEmoji(speak());
  stateContainer.appendChild(characterEmoji);

  const characterPortrait = getCharacterPortrait(portrait);
  CharacterCard.prepend(characterPortrait);

  if (!isAlive) {
    characterPortrait.classList.add("character__portrait--reverse");
    portrait.description = `Portrait of ${name} ${lastName} upside down`
  }

  return CharacterCard;
};

export default getCharacterCard;
