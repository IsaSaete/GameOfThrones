import { Character } from "../characters/types";

export type King = Character & {
  yearsOfReign: number;
  phrase: "You are all going to die";
};
