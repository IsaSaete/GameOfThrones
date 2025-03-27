import { CharacterCommonData } from "../../character/types";
import { getFighter } from "./getFighter";

describe("Given the getFighter function", () => {
  describe("When it recives Jon Snow character, the Longclaw weapon and a number 8 dexterity", () => {
    const jonSnow: CharacterCommonData = {
      name: "Jon",
      lastName: "Snow",
      age: 17,
      portrait: {
        url: "",
        description: "",
      },
    };
    const weapon = "Longclaw";
    const dexterity = 8;

    test("Then it should return a fighting character with the name 'Jon'.", () => {
      const expectedName = "Jon";

      const fighter = getFighter(jonSnow, weapon, dexterity);
      const fighterName = fighter.name;

      expect(fighterName).toBe(expectedName);
    });

    test("Then it should return a fighter that says: 'First I punch, then I ask'.", () => {
      const expectedPhrase = "First I punch, then I ask";

      const fighter = getFighter(jonSnow, weapon, dexterity);
      const fighterPhrase = fighter.speak();

      expect(fighterPhrase).toBe(expectedPhrase);
    });

    test("Then it should return a fighter character whose weapon is named 'Longclaw", () => {
      const fighter = getFighter(jonSnow, weapon, dexterity);
      const fighterWeapon = fighter.weapon;

      expect(fighterWeapon).toBe(weapon);
    });

    test("then it should return that the character's dexterity is 8", () => {
      const fighter = getFighter(jonSnow, weapon, dexterity);
      const fighterDexterity = fighter.dexterity;

      expect(fighterDexterity).toBe(dexterity);
    });
  });
});
