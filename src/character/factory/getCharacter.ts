import { Character, CharacterCommonData } from "../types";

const getCharacter = (characterCommonData: CharacterCommonData) => {
  const character: Character = {
    ...characterCommonData,
    isAlive: true,
    kill() {
      this.isAlive = false;
    },
    speak() {
      throw new Error("Abstract method");
    },
  };

  return character;
};

export default getCharacter;
