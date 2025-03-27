import getAdviser from "./getAdviser";
import { mariaSarmiento } from "../king/fixtures";

const paquitoChocolatero = getAdviser(
  {
    name: "Paquito",
    lastName: "Chocolatero",
    age: 40,
    portrait: {
      url: "",
      description: "",
    },
  },
  mariaSarmiento,
);

export { paquitoChocolatero };
