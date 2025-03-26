import { Adviser } from "../adviser/type";
import { Fighter } from "../fighter/types";
import { King } from "../king/type";
import { Squire } from "../squire/types";

export const getPhrases = (
  characters: (King | Fighter | Adviser | Squire)[],
): string[] => {

  return characters.map((character) => character.phrase);
};
