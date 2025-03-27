import { Character } from "../character/types";

export type DexterityRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type Fighter = Character & {
  weapon: string;
  dexterity: DexterityRange;
  speak: () => "First I punch, then I ask";
};
