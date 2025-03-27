import { CharacterCommonData } from "../character/types";
import { lebronJames } from "../fighter/fixtures";
import getAdviser from "./getAdviser";

describe("Given the getAdviser function", () => {
  describe("When it receives Michael Olowokandi and LeBron James", () => {
    const characterData: CharacterCommonData = {
      name: "Michael",
      lastName: "Olowokandi",
      age: 2,
      portrait: {
        url: "",
        description: "",
      },
    };

    test("Then it should return adviser with name 'Michael Olowokandi'", () => {
      const expectedCompleteName = "Michael Olowokandi";

      const adviser = getAdviser(characterData, lebronJames);
      const adviserCompleteName = `${adviser.name} ${adviser.lastName}`;

      expect(adviserCompleteName).toBe(expectedCompleteName);
    });

    test("Then it should return adviser that serves to LeBron James", () => {
      const expectedAdvisesTo = lebronJames;

      const adviser = getAdviser(characterData, lebronJames);

      expect(adviser.advisesTo).toStrictEqual(expectedAdvisesTo);
    });

    test("Then it should return adviser that says 'I don't know why, but I think I'm going to die soon'", () => {
      const expectedPhrase =
        "I don't know why, but I think I'm going to die soon";

      const adviser = getAdviser(characterData, lebronJames);
      const adviserPhrase = adviser.speak();

      expect(adviserPhrase).toBe(expectedPhrase);
    });
  });
});
