import { bradPitt } from "../../../../squire/fixtures";
import getCharacterEmoji from "../getCharacterEmoji";

describe("Given the getCharacterEmoji function", () => {
  describe("When it receives a Bradd Pitt", () => {
    test("Then it should show a shield emoji", () => {
      const screen = document.createElement("div");
      const expectedEmoji = "🛡️";

      const characterEmoji = getCharacterEmoji(bradPitt.speak());

      screen.appendChild(characterEmoji);

      const emojiElement = screen.querySelector("span");

      expect(emojiElement).not.toBeNull();
      expect(emojiElement?.textContent).toBe(expectedEmoji);
    });
  });
});
