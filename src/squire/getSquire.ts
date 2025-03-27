import { Character } from "../character/types";
import { Fighter } from "../fighter/types";
import { Squire } from "./types";
import { NumberRange } from "../shared/types";

const getSquire = (
  characterData: Character,
  ballism: NumberRange,
  servesTo: Fighter,
): Squire => {
  const squire: Squire = {
    name: characterData.name,
    lastName: characterData.lastName,
    age: characterData.age,
    isAlive: true,
    portrait: characterData.portrait,
    actions: characterData.actions,
    servesTo,
    ballism,
    phrase: "I'm a loser",
  };

  return squire;
};

export default getSquire;
