import { daenerysTargaryen } from "../character/data";
import { Character } from "../character/type";
import getSquire from "./getSquire";

describe("Given the getSquire function", () => {
  describe("When it receives Michael Olowokandi character, 5 ballism, and Daenerys Targaryen", () => {
    const characterData: Character = {
      name: "Michael",
      lastName: "Olowokandi",
      age: 2,
      isAlive: true,
      portraitUrl: "",
      portraitDescription: "",
    };
    const ballism = 5;
    const fighter = daenerysTargaryen;

    test("Then it should return squire with name 'MIchael'", () => {
      const expectedCompleteName = "Michael Olowokandi";

      const squire = getSquire(characterData, ballism, fighter);
      const squireCompleteName = `${squire.name} ${squire.lastName}`;

      expect(squireCompleteName).toBe(expectedCompleteName);
    });

    test("Then it should return squire with ballism 5", () => {
      const expectedBallism = 5;

      const squire = getSquire(characterData, ballism, fighter);

      expect(squire.ballism).toBe(expectedBallism);
    });

    test("Then it should return squire that serves to Daenerys Targaryen", () => {
      const expectedServesTo = daenerysTargaryen;

      const squire = getSquire(characterData, ballism, fighter);

      expect(squire.servesTo).toStrictEqual(expectedServesTo);
    });

    test("Then it should return squire that says 'I'm a loser'", () => {
      const expectedPhrase = "I'm a loser";

      const squire = getSquire(characterData, ballism, fighter);

      expect(squire.phrase).toBe(expectedPhrase);
    });
  });
});
