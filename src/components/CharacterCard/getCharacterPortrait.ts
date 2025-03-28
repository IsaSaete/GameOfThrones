import { Portrait } from "../../character/types";

const getCharacterPortrait = ({ url, description }: Portrait): HTMLElement => {
  const characterPortrait = document.createElement("img");
  characterPortrait.className = "character__portrait";
  characterPortrait.src = url;
  characterPortrait.alt = description;
  characterPortrait.width = 350;
  characterPortrait.height = 280;

  return characterPortrait;
};

export default getCharacterPortrait;
