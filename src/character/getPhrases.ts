import { Character } from "./types";

export const getPhrases = (characters: Character[]): string[] => {
  return characters.map((character) => character.speak());
};
