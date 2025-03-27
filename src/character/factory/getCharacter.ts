import killCharacter from "../killCharacter";
import makeCharacterSpeak from "../makeCharacterSpeak";
import { Character, Portrait } from "../types";

const getCharacter = (
  name: string,
  lastName: string,
  age: number,
  portrait: Portrait,
) => {
  const character: Character = {
    name,
    lastName,
    age,
    isAlive: true,
    portrait,
    actions: {
      kill: killCharacter,
      speak: makeCharacterSpeak,
    },
  };

  return character;
};

export default getCharacter;
