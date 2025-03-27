import { CharacterType } from "../shared/types";

export const getPhrases = (characters: CharacterType[]): string[] => {
  return characters.map((character) => character.phrase);
};
