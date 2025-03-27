import getSquire from "./getSquire";
import { carbassot } from "../fighter/fixtures";

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

export { bradPitt };
