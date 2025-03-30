import getFighter from "./factory/getFighter";

const lebronJames = getFighter(
  {
    name: "Lebron",
    lastName: "James",
    age: 40,
    portrait: {
      url: "https://lebronjames.com/lebron.webp",
      description: "LeBron James bouncing a ball",
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
      url: "https://carbassotcarbassa.com/carbassot.webp",
      description: "A portrait of Carbassot Carbassa",
    },
  },
  "Knife",
  2,
);

export { lebronJames, carbassot };
