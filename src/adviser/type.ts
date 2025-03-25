import { Character } from "../character/type";

export type Adviser = Character & {
  advisesTo: string;
  phrase: "I don't know why, but I think I'm going to die soon";
};
