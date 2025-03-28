import { mariaSarmiento } from "../../../king/fixtures";
import getCharacterCard from "./getCharacterCard.js";

describe("Given a CharacterCard componen", () => {
  describe("When it recieves a 'María Sarmiento'", () => {
    test("Then it should show a character's name inside a heading", () => {
      const screen = document.createElement("div");
      const expectedCharacterName = "María Sarmiento";

      const CharacterCard = getCharacterCard(mariaSarmiento);
      screen.appendChild(CharacterCard);

      const characterName = screen.querySelector("h2");

      expect(characterName).not.toBeNull();
      expect(characterName?.textContent).toBe(expectedCharacterName);
    });
  });
});
