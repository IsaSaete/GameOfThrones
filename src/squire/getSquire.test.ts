import getCharacter from "../character/factory/getCharacter";
import getSquire from "./getSquire";
import { lebronJames } from "../shared/fixtures";

describe("Given the getSquire function", () => {
  describe("When it receives Michael Olowokandi character, 5 ballism, and LeBron James", () => {
    const characterData = getCharacter("Michael", "Olowokandi", 2, {
      url: "",
      description: "",
    });
    const ballism = 5;

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
