import { Character } from "../../character/type.js";
import { Fighter } from "../types.js";
import { Range } from "../types.js";

export const getFighter = (
  dataCharacter: Character,
  weapon: string,
  dexterity: Range,
): Fighter => {
  const fighter: Fighter = {
    name: dataCharacter.name,
    lastName: dataCharacter.lastName,
    age: dataCharacter.age,
    isAlive: dataCharacter.isAlive,
    portraitUrl: dataCharacter.portraitUrl,
    portraitDescription: dataCharacter.portraitDescription,
    weapon,
    dexterity,
    phrase: "First I punch, then I ask",
  };

  return fighter;
};
