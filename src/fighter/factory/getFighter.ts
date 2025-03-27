import { Character } from "../../character/types.js";
import { Fighter } from "../types.js";
import { NumberRange } from "../../shared/types.js";

export const getFighter = (
  characterData: Character,
  weapon: string,
  dexterity: NumberRange,
): Fighter => {
  const fighter: Fighter = {
    name: characterData.name,
    lastName: characterData.lastName,
    age: characterData.age,
    isAlive: characterData.isAlive,
    portrait: characterData.portrait,
    actions: characterData.actions,
    weapon,
    dexterity,
    phrase: "First I punch, then I ask",
  };

  return fighter;
};
