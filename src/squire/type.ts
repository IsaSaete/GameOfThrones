import { Character } from "../character/type";
import { Fighter } from "../fighter/types";

export type Squire = Character & {
  servesTo: Fighter;
  ballism: number;
  phrase: "I'm a loser";
};
