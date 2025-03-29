import getKing from "../king/factory/getKing.js";
import getFighter from "../fighter/factory/getFighter.js";
import getSquire from "../squire/factory/getSquire.js";
import getAdviser from "../adviser/getAdviser.js";

const joffreyBaratheon = getKing(
  {
    name: "Joffrey",
    lastName: "Baratheon",
    age: 14,
    portrait: {
      url: "/images/portraits/Joffrey_Baratheon.webp",
      description: "Portrait of Joffrey Baratheon",
    },
  },
  5,
);

const jaimeLanister = getFighter(
  {
    name: "Jaime",
    lastName: "Lannister",
    age: 43,
    portrait: {
      url: "/images/portraits/Jaime_Lannister.webp",
      description: "Portrait of Jaime Lannister",
    },
  },
  "Widow's Wail Sword",
  6,
);

const daenerysTargaryen = getFighter(
  {
    name: "Daenerys",
    lastName: "Targaryen",
    age: 24,
    portrait: {
      url: "/images/portraits/Daenerys_Targaryen.webp",
      description: "Portrait of a serious Daenerys Targaryen",
    },
  },
  "dragons",
  8,
);

const bronnBlackwater = getSquire(
  {
    name: "Bronn",
    lastName: "Blackwater",
    age: 32,
    portrait: {
      url: "/images/portraits/Bronn.webp",
      description: "Portratit of Bronn",
    },
  },
  5,
  daenerysTargaryen,
);

const tyrionLannister = getAdviser(
  {
    name: "Tyrion",
    lastName: "Lannister",
    age: 39,
    portrait: {
      url: "/images/portraits/Tyrion_Lannister.webp",
      description: "Portrait of Tyrion Lannister",
    },
  },
  joffreyBaratheon,
);

export const characters = [
  joffreyBaratheon,
  jaimeLanister,
  daenerysTargaryen,
  tyrionLannister,
  bronnBlackwater,
];
