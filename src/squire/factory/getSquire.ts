import getCharacter from "../../character/factory/getCharacter.js";
import { CharacterCommonData } from "../../character/types.js";
import { Fighter } from "../../fighter/types.js";
import { BallismRange, Squire } from "../types.js";

const getSquire = (
  characterCommonData: CharacterCommonData,
  ballism: BallismRange,
  servesTo: Fighter,
): Squire => {
  const character = getCharacter(characterCommonData);

  const squire: Squire = {
    ...character,
    servesTo,
    ballism,
    speak() {
      return "I'm a loser";
    },
  };

  return squire;
};

export default getSquire;
