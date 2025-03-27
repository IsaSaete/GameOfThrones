import { Character } from "../character/types";
import { Fighter } from "../fighter/types";
import { King } from "../king/types";

export type Adviser = Character & {
  advisesTo: King | Adviser | Fighter;
  phrase: "I don't know why, but I think I'm going to die soon";
};
