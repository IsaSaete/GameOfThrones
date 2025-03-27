import { Adviser } from "../adviser/type";
import { getKing } from "../king/factory/getKing";
import { getFighter } from "../fighter/factory/getFighter";
import getCharacter from "./factory/getCharacter";
import getSquire from "../squire/getSquire";
import killCharacter from "./killCharacter";
import makeCharacterSpeak from "./makeCharacterSpeak";

const character1 = getCharacter("Joffrey", "Baratheon", 14, {
  url: "/images/portrait/Joffrey_Baratheon.webp",
  description: "Portrait of Joffrey Baratheon",
});

const character2 = getCharacter("Jaime", "Lannister", 43, {
  url: "/images/portrait/Jaime_Lannister.webp",
  description: "Portrait of Jaime Lannister",
});

const character3 = getCharacter("Daenerys", "Targaryen", 24, {
  url: "/images/portrait/Daenerys_Targaryen.webp",
  description: "Portrait of a serious Daenerys Targaryen",
});

const character4 = getCharacter("Bronn", "Blackwater", 32, {
  url: "/images/portrait/Bronn.webp",
  description: "Portratit of Bronn",
});

const joffreyBaratheon = getKing(character1, 5);
const jaimeLanister = getFighter(character2, "Widow's Wail Sword", 6);
const daenerysTargaryen = getFighter(character3, "dragons", 8);
const bronnBlackwater = getSquire(character4, 5, daenerysTargaryen);
const tyrionLannister: Adviser = {
  name: "Tyrion",
  lastName: "Lannister",
  age: 39,
  isAlive: true,
  portrait: {
    url: "/images/portrait/Tyrion_Lannister.webp",
    description: "Portrait of Tyrion Lannister",
  },
  actions: {
    kill: killCharacter,
    speak: makeCharacterSpeak,
  },
  advisesTo: joffreyBaratheon,
  phrase: "I don't know why, but I think I'm going to die soon",
};

export {
  joffreyBaratheon,
  jaimeLanister,
  daenerysTargaryen,
  tyrionLannister,
  bronnBlackwater,
};
