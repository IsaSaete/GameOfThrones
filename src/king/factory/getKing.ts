import { Character } from "../../character/types.js";
import { King } from "../types.js";

export const getKing = (
  characterData: Character,
  yearsOfReign: number,
): King => {
  const king: King = {
    name: characterData.name,
    lastName: characterData.lastName,
    age: characterData.age,
    isAlive: characterData.isAlive,
    portrait: characterData.portrait,
    actions: characterData.actions,
    yearsOfReign,
    phrase: "You are all going to die",
  };

  return king;
};
