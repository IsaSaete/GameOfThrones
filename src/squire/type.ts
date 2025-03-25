import { Character } from "../character/type";

export type Squire = Character & {
  servesTo: string;
  ballism: number;
  phrase: "I'm a loser";
};
