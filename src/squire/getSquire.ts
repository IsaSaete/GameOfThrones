import getCharacter from "../character/factory/getCharacter.js";
import { CharacterCommonData } from "../character/types";
import { Fighter } from "../fighter/types";
import { BallismRange, Squire } from "./types";

const getSquire = (
  characterCommonData: CharacterCommonData,
  ballism: BallismRange,
  servesTo: Fighter,
): Squire => {
  const commonData = getCharacter(characterCommonData);

  const squire: Squire = {
    ...commonData,
    servesTo,
    ballism,
    speak() {
      return "I'm a loser";
    },
  };

  return squire;
};

export default getSquire;
