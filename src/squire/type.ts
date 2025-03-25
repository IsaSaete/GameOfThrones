import { Character } from "../character/type";
import { Fighter } from "../fighter/type";

export type Squire = Character & {
  servesTo: Fighter;
  ballism: number;
  phrase: "I'm a loser";
};
