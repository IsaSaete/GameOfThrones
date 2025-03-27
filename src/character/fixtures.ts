import getKing from "../king/factory/getKing";
import getFighter from "../fighter/factory/getFighter";
import getAdviser from "../adviser/getAdviser";
import getSquire from "../squire/getSquire";
import { Character } from "./types";

const mariaSarmiento = getKing(
  {
    name: "María",
    lastName: "Sarmiento",
    age: 50,
    portrait: {
      url: "",
      description: "",
    },
  },
  2,
);

const carbassot = getFighter(
  {
    name: "Carbassot",
    lastName: "Carbassa",
    age: 7,
    portrait: {
      url: "",
      description: "",
    },
  },
  "Knife",
  2,
);

const paquitoChocolatero = getAdviser(
  {
    name: "Paquito",
    lastName: "Chocolatero",
    age: 40,
    portrait: {
      url: "",
      description: "",
    },
  },
  mariaSarmiento,
);

const bradPitt = getSquire(
  {
    name: "Brad",
    lastName: "Pitt",
    age: 55,
    portrait: {
      url: "",
      description: "",
    },
  },
  8,
  carbassot,
);

export const fixtureCharacters: Character[] = [
  mariaSarmiento,
  carbassot,
  paquitoChocolatero,
  bradPitt,
];
