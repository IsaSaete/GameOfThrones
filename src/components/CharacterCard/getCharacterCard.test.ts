import { mariaSarmiento } from "../../king/fixtures";
import getCharacterCard from "./getCharacterCard.js";

describe("Given a CharacterCard componen", () => {
  describe("When it recives a 'María Sarmiento'", () => {
    test("Then it should show 'María Sarmiento' inside a heading", () => {
      const screen = document.createElement("div");
      const expectedCharacterName = "María Sarmiento";

      const CharacterCard = getCharacterCard(mariaSarmiento);
      screen.appendChild(CharacterCard);

      const characterName = screen.querySelector("h2");

      expect(characterName).not.toBeNull();
      expect(characterName?.textContent).toBe(expectedCharacterName);
    });

    test("Then it should show 'Age: 50 years", () => {
      const screen = document.createElement("div");
      const expectedCharacterAge = "Age: " + 50 + " years";

      const CharacterCard = getCharacterCard(mariaSarmiento);
      screen.appendChild(CharacterCard);

      const characterAge = screen.querySelector("span");

      expect(characterAge).not.toBeNull();
      expect(characterAge?.textContent).toBe(expectedCharacterAge);
    });
  });
});
