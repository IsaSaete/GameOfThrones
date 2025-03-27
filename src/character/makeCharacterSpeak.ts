import { Character } from "./types";

const makeCharacterSpeak = (character: Character): string => {
  if (!character.speak()) {
    throw new Error("Missing phrase property.");
  }

  return character.speak();
};

export default makeCharacterSpeak;
