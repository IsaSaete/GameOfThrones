import makeCharacterSpeak from "../makeCharacterSpeak";
import { lebronJames } from "../../shared/fixtures";

describe("Given the makeCharacterSpeak function", () => {
  describe("When it receives LeBron James Fighter", () => {
    test("Then it should return 'First I punch, then I ask'.", () => {
      const expectedPhrase = "First I punch, then I ask";

      const actualPhrase = makeCharacterSpeak(lebronJames);

      expect(actualPhrase).toBe(expectedPhrase);
    });
  });
});
