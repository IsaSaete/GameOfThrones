import { Character } from "../character/type";

export type Fighter = Character & {
  weapon: string;
  dexterity: Range;
  phrase: "First I punch, then I ask";
};

export type Range = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
