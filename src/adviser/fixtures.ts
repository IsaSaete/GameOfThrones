import getAdviser from "./getAdviser";
import { mariaSarmiento } from "../king/fixtures";

const paquitoChocolatero = getAdviser(
  {
    name: "Paquito",
    lastName: "Chocolatero",
    age: 40,
    portrait: {
      url: "https://paquitochocolatero.com/portrait.webp",
      description: "A very chocolatey man",
    },
  },
  mariaSarmiento,
);

export { paquitoChocolatero };
