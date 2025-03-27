import { getKing } from "./getKing";
import getCharacter from "../../character/factory/getCharacter";

describe("Given the getKing function", () => {
  describe("When it receives Felipe IV character and 19 years of reign", () => {
    const felipeIV = getCharacter("Felipe", "IV", 60, {
      url: "",
      description: "",
    });
    const yearsOfReign = 19;

    test("Then it should return a king with name 'Felipe'", () => {
      const expectedName = "Felipe";

      const king = getKing(felipeIV, yearsOfReign);
      const actualName = king.name;

      expect(actualName).toBe(expectedName);
    });

    test("Then it should return a king with last name 'IV'", () => {
      const expectedLastName = "IV";

      const king = getKing(felipeIV, yearsOfReign);
      const actualLastName = king.lastName;

      expect(actualLastName).toBe(expectedLastName);
    });

    test("Then it should return a king with 19 years of reign", () => {
      const expectedYearsOfReign = 19;

      const king = getKing(felipeIV, yearsOfReign);
      const actualYearsOfReign = king.yearsOfReign;

      expect(actualYearsOfReign).toBe(expectedYearsOfReign);
    });

    test("Then it should return a king that says 'You are all going to die'", () => {
      const expectedPhrase = "You are all going to die";

      const king = getKing(felipeIV, yearsOfReign);
      const actualPhrase = king.phrase;

      expect(actualPhrase).toBe(expectedPhrase);
    });
  });
});
