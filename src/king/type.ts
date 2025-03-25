import { Character } from "../character/type";

export type King = Character & {
  yearsOfReign: number;
  phrase: "You are all going to die";
};
