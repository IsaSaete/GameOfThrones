import { Character } from "../character/type";
import { Fighter } from "../fighter/types";
import getSquire from "./getSquire";

describe("Given the getSquire function", () => {
  describe("When it receives Michael Olowokandi character, 5 ballism, and LeBron James", () => {
    const characterData: Character = {
      name: "Michael",
      lastName: "Olowokandi",
      age: 2,
      isAlive: true,
      portraitUrl: "",
      portraitDescription: "",
    };
    const ballism = 5;
    const lebronJames: Fighter = {
      name: "LeBron",
      lastName: "James",
      age: 40,
      isAlive: true,
      portraitUrl: "",
      portraitDescription: "",
      dexterity: 10,
      weapon: "Basketball",
      phrase: "First I punch, then I ask",
    };

    test("Then it should return squire with name 'Michael'", () => {
      const expectedCompleteName = "Michael Olowokandi";

      const squire = getSquire(characterData, ballism, lebronJames);
      const squireCompleteName = `${squire.name} ${squire.lastName}`;

      expect(squireCompleteName).toBe(expectedCompleteName);
    });

    test("Then it should return squire with ballism 5", () => {
      const expectedBallism = 5;

      const squire = getSquire(characterData, ballism, lebronJames);

      expect(squire.ballism).toBe(expectedBallism);
    });

    test("Then it should return squire that serves to LeBron James", () => {
      const expectedServesTo = lebronJames;

      const squire = getSquire(characterData, ballism, lebronJames);

      expect(squire.servesTo).toStrictEqual(expectedServesTo);
    });

    test("Then it should return squire that says 'I'm a loser'", () => {
      const expectedPhrase = "I'm a loser";

      const squire = getSquire(characterData, ballism, lebronJames);

      expect(squire.phrase).toBe(expectedPhrase);
    });
  });
});
