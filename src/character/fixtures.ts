import { King } from "../king/type";
import { Squire } from "../squire/types";
import { Fighter } from "../fighter/types";
import { Adviser } from "../adviser/type";

const mariaSarmiento: King = {
  name: "María",
  lastName: "Sarmiento",
  age: 50,
  isAlive: false,
  portraitUrl: "",
  portraitDescription: "",
  yearsOfReign: 2,
  phrase: "You are all going to die",
};

const carbassot: Fighter = {
  name: "Carbassot",
  lastName: "Carbassa",
  age: 7,
  isAlive: false,
  portraitUrl: "",
  portraitDescription: "",
  weapon: "",
  dexterity: 2,
  phrase: "First I punch, then I ask",
};

const paquitoChocolatero: Adviser = {
  name: "Paquito",
  lastName: "Chocolatero",
  age: 40,
  isAlive: true,
  portraitUrl: "",
  portraitDescription: "",
  advisesTo: mariaSarmiento,
  phrase: "I don't know why, but I think I'm going to die soon",
};

const bradPitt: Squire = {
  name: "Brad",
  lastName: "Pitt",
  age: 55,
  isAlive: true,
  portraitUrl: "",
  portraitDescription: "",
  servesTo: carbassot,
  ballism: 8,
  phrase: "I'm a loser",
};

export {mariaSarmiento, carbassot, paquitoChocolatero, bradPitt};
