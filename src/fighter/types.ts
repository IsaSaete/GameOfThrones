import { Character } from "../character/types";
import { NumberRange } from "../shared/types";

export type Fighter = Character & {
  weapon: string;
  dexterity: NumberRange;
  phrase: "First I punch, then I ask";
};
