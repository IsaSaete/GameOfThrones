import { Character } from "../character/type";

export type Fighter = Character & {
  weapon: string;
  dexterity: number;
  phrase: "First I punch, then I ask";
};
