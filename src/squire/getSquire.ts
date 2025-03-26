import { Character } from "../character/type";
import { Fighter } from "../fighter/types";
import { Range, Squire } from "./types";

const getSquire = (
  characterData: Character,
  ballism: Range,
  servesTo: Fighter,
): Squire => {
  const squire: Squire = {
    name: characterData.name,
    lastName: characterData.lastName,
    age: characterData.age,
    isAlive: true,
    portraitUrl: characterData.portraitUrl,
    portraitDescription: characterData.portraitDescription,
    servesTo,
    ballism,
    phrase: "I'm a loser",
  };

  return squire;
};

export default getSquire;
