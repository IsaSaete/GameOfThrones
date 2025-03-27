import { Character } from "../character/types";

export type King = Character & {
  yearsOfReign: number;
  speak: () => "You are all going to die";
};
