import { Character } from "../character/types";
import { Fighter } from "../fighter/types";

export type BallismRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type Squire = Character & {
  servesTo: Fighter;
  ballism: BallismRange;
  speak: () => "I'm a loser";
};
