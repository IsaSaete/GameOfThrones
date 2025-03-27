import { CharacterType } from "../shared/types";

const makeCharacterSpeak = (character: CharacterType): string => {
  if (!character.phrase) {
    throw new Error("Missing phrase property.");
  }

  return character.phrase;
};

export default makeCharacterSpeak;
