import { Character } from "../../character/type.js";
import { Fighter } from "../type.js";
import { Range } from "../type.js";

export const getFighter = (
  character: Character,
  weapon: string,
  dexterity: Range,
): Fighter => {
  const fighter: Fighter = {
    name: character.name,
    lastName: character.lastName,
    age: character.age,
    isAlive: character.isAlive,
    portraitUrl: character.portraitUrl,
    portraitDescription: character.portraitDescription,
    weapon,
    dexterity,
    phrase: "First I punch, then I ask",
  };

  return fighter;
};
