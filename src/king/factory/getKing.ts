import getCharacter from "../../character/factory/getCharacter.js";
import { CharacterCommonData } from "../../character/types.js";
import { King } from "../types.js";

const getKing = (
  characterCommonData: CharacterCommonData,
  yearsOfReign: number,
): King => {
  const character = getCharacter(characterCommonData);

  const king: King = {
    ...character,
    yearsOfReign,
    speak() {
      return "You are all going to die";
    },
  };

  return king;
};

export default getKing;
