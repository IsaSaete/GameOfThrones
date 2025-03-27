import getCharacter from "../../character/factory/getCharacter";
import getCharacterCard from "./getCharacterCard";

describe("Given a CharacterCard componen", () => {
  describe("When it recives a 'Monica del Raval'", () => {
    test("Then it should show a character's name inside a heading", () => {
      const screen = document.createElement("div");
      const expectedCharacterName = "Mónica del Raval";

      const character = getCharacter("Mónica", "del Raval", 59, {
        url: "/images/monica_del_raval",
        description: "Portrait of Monica del Raval",
      });

      const CharacterCard = getCharacterCard(character);
      screen.appendChild(CharacterCard);

      const characterName = screen.querySelector("h2");

      expect(characterName).not.toBeNull();
      expect(characterName?.textContent).toBe(expectedCharacterName);
    });
  });
});
