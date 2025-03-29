import { bradPitt } from "../../../../squire/fixtures";
import getCharacterEmoji from "../getCharacterEmoji";

describe("Given the getCharacterEmoji function", () => {
  describe("When it receives a Bradd Pitt", () => {
    test("Then it should show a shield emoji", () => {
      const screen = document.createElement("div");
      const expectedEmoji = "🛡️";

      const character = bradPitt;
      const characterEmoji = getCharacterEmoji(bradPitt.speak());

      screen.appendChild(characterEmoji);

      expect(characterEmoji).not.toBeNull();
      expect(characterEmoji?.textContent).toBe(expectedEmoji);
    });
  });
});
