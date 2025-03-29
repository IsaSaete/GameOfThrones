import getSquire from "./getSquire";
import { carbassot } from "../fighter/fixtures";

const bradPitt = getSquire(
  {
    name: "Brad",
    lastName: "Pitt",
    age: 55,
    portrait: {
      url: "https://bradpitt.com/bradpitt.webp",
      description: "Brad Pitt looking defeated",
    },
  },
  8,
  carbassot,
);

export { bradPitt };
