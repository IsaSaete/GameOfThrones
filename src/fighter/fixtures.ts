import { getFighter } from "./factory/getFighter";

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

export { lebronJames };
