import { Character } from "../character/types";

export type Adviser = Character & {
  advisesTo: Character;
  speak: () => "I don't know why, but I think I'm going to die soon";
};
