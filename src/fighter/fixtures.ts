import getFighter from "./factory/getFighter";

const lebronJames = getFighter(
  {
    name: "Lebron",
    lastName: "James",
    age: 40,
    portrait: {
      url: "",
      description: "",
    },
  },
  "Basketball",
  10,
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

export { lebronJames, carbassot };
