import { Adviser } from "../adviser/type";
import { Fighter } from "../fighter/types";
import { King } from "../king/type";
import { Squire } from "../squire/types";

export const getPhrases = (
  characters: (King | Fighter | Adviser | Squire)[],
): string[] => {
  if (characters.length === 0) {
    throw new Error("Cannot get phrases from an empty array.");
  }

  return characters.map((character) => character.phrase);
};
