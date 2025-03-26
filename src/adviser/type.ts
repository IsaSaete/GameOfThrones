import { Character } from "../character/type";
import { Fighter } from "../fighter/types";
import { King } from "../king/type";

export type Adviser = Character & {
  advisesTo: King | Adviser | Fighter;
  phrase: "I don't know why, but I think I'm going to die soon";
};
