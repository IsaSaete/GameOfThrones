import { King } from "../king/type";
import { Squire } from "../squire/type";
import { Fighter } from "../fighter/types";
import { Adviser } from "../adviser/type";

const joffreyBaratheon: King = {
  name: "Joffrey",
  lastName: "Baratheon",
  age: 14,
  isAlive: false,
  portraitUrl: "/images/portrait/Joffrey_Baratheon.webp",
  portraitDescription: "Portrait of Joffrey Baratheon",
  yearsOfReign: 5,
  phrase: "You are all going to die",
};

const jaimeLanister: Fighter = {
  name: "Jaime ",
  lastName: "Lannister",
  age: 43,
  isAlive: false,
  portraitUrl: "/images/portrait/Jaime_Lannister.webp",
  portraitDescription: "Portrait of Jaime Lannister",
  weapon: "Widow's Wail Sword",
  dexterity: 6,
  phrase: "First I punch, then I ask",
};

const daenerysTargaryen: Fighter = {
  name: "Daenerys",
  lastName: "Targaryen",
  age: 24,
  isAlive: false,
  portraitUrl: "/images/portrait/Daenerys_Targaryen.webp",
  portraitDescription: "Portrait of a serious Daenerys Targaryen",
  weapon: "dragons",
  dexterity: 8,
  phrase: "First I punch, then I ask",
};

const tyrionLannister: Adviser = {
  name: "Tyrion",
  lastName: "Lannister",
  age: 39,
  isAlive: true,
  portraitUrl: "/images/portrait/Tyrion_Lannister.webp",
  portraitDescription: "Portrait of Tyrion Lannister",
  advisesTo: joffreyBaratheon,
  phrase: "I don't know why, but I think I'm going to die soon",
};

const bronnBlackwater: Squire = {
  name: "Bronn",
  lastName: "Blackwater",
  age: 32,
  isAlive: true,
  portraitUrl: "/images/portrait/Bronn.webp",
  portraitDescription: "Portratit of Bronn",
  servesTo: daenerysTargaryen,
  ballism: 5,
  phrase: "I'm a loser",
};

export {
  joffreyBaratheon,
  jaimeLanister,
  daenerysTargaryen,
  tyrionLannister,
  bronnBlackwater,
};
