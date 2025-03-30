import { Portrait } from "../../types";

const getCharacterPortrait = (
  { url, description }: Portrait,
  isAlive: boolean,
): HTMLElement => {
  const characterPortrait = document.createElement("img");

  characterPortrait.className = "character__portrait";
  characterPortrait.alt = description;

  if (!isAlive) {
    characterPortrait.classList.add("reverse");
    characterPortrait.alt = `${description} upside down`;
  }

  characterPortrait.src = url;
  characterPortrait.width = 350;
  characterPortrait.height = 280;

  return characterPortrait;
};

export default getCharacterPortrait;
