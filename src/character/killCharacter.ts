import { Character } from "../character/types";

const killCharacter = (character: Character) => {
  character.isAlive = false;
};

export default killCharacter;
