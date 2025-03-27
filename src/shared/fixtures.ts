import getCharacter from "../character/factory/getCharacter";
import { getFighter } from "../fighter/factory/getFighter";

const character1 = getCharacter("Lebron", "James", 40, {
  url: "",
  description: "",
});

const lebronJames = getFighter(character1, "Basketball", 10);

export { lebronJames };
