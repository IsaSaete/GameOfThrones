import { Character } from "../character/type";
import { Fighter } from "../fighter/types";

export type Range = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type Squire = Character & {
  servesTo: Fighter;
  ballism: Range;
  phrase: "I'm a loser";
};
