import { Character } from "../character/types";
import { Fighter } from "../fighter/types";
import { NumberRange } from "../shared/types";

export type Squire = Character & {
  servesTo: Fighter;
  ballism: NumberRange;
  phrase: "I'm a loser";
};
