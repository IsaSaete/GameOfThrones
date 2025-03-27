import getCharacter from "./getCharacter";
import { Portrait } from "../types";

describe("Given the getCharacter function", () => {
  describe("When it receives 'LeBron', 'James', 40, and an empty portrait", () => {
    const name = "LeBron";
    const lastName = "James";
    const age = 40;
    const portrait: Portrait = {
      url: "",
      description: "",
    };

    test("Then it should return a character with name 'LeBron'", () => {
      const expectedName = "LeBron";

      const character = getCharacter({ name, lastName, age, portrait });

      expect(character.name).toBe(expectedName);
    });

    test("Then it should return a character with last name 'James'", () => {
      const expectedLastName = "James";

      const character = getCharacter({ name, lastName, age, portrait });

      expect(character.lastName).toBe(expectedLastName);
    });

    test("Then it should return a 40 year old character", () => {
      const expectedAge = 40;

      const character = getCharacter({ name, lastName, age, portrait });

      expect(character.age).toBe(expectedAge);
    });

    test("Then it should return a 40 year old character that is alive", () => {
      const character = getCharacter({ name, lastName, age, portrait });

      expect(character.isAlive).toBe(true);
    });
  });
});
