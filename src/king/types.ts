import { Character } from "../character/types";

export type King = Character & {
  yearsOfReign: number;
  phrase: "You are all going to die";
};
