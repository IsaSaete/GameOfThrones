import { Character } from "../../types";

const getCharacterEmoji = (characterPhrase: string): HTMLElement => {
  const emojiElement = document.createElement("span");
  emojiElement.className = "emoji";

  let characterEmoji: string;

  switch (characterPhrase) {
    case "You are all going to die":
      characterEmoji = "👑";
      break;

    case "First I punch, then I ask":
      characterEmoji = "🗡";
      break;

    case "I don't know why, but I think I'm going to die soon":
      characterEmoji = "🎓";
      break;

    case "I'm a loser":
      characterEmoji = "🛡️";
      break;

    default:
      characterEmoji = "";
      break;
  }
  emojiElement.textContent = `${characterEmoji}`;

  return emojiElement;
};

export default getCharacterEmoji;
