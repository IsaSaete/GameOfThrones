import { Character } from "../../character/type.js";
import { King } from "../type.js";

export const getKing = (character: Character, yearsOfReign: number): King => {
  const king: King = {
    name: character.name,
    lastName: character.lastName,
    age: character.age,
    isAlive: character.isAlive,
    portraitUrl: character.portraitUrl,
    portraitDescription: character.portraitDescription,
    yearsOfReign,
    phrase: "You are all going to die",
  };

  return king;
};
