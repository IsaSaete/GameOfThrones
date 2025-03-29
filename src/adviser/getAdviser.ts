import getCharacter from "../character/factory/getCharacter.js";
import { Character, CharacterCommonData } from "../character/types";
import { Adviser } from "./type";

const getAdviser = (
  characterCommonData: CharacterCommonData,
  advisesTo: Character,
): Adviser => {
  const character = getCharacter(characterCommonData);

  const adviser: Adviser = {
    ...character,
    advisesTo,
    speak() {
      return "I don't know why, but I think I'm going to die soon";
    },
  };

  return adviser;
};

export default getAdviser;
