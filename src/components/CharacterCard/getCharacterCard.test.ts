import getCharacterCard from "./getCharacterCard";

describe("Given a CharacterCard componen", () => {
  describe("When it recives a 'Monica del Raval'", () => {
    test("Then it should show a character's name inside a heading", () => {
      const screen = document.createElement("div");
      const expectedCharacterName = "Mónica del Raval";

      const CharacterCard = getCharacterCard({
        name: "Mónica",
        lastName: "del Raval",
        age: 59,
        isAlive: false,
        portraitUrl: "/images/monica_del_raval",
        portraitDescription: "Portrait of Monica del Raval",
      });
      screen.appendChild(CharacterCard);

      const characterName = screen.querySelector("h2");

      expect(characterName).not.toBeNull();
      expect(characterName?.textContent).toBe(expectedCharacterName);
    });
  });
});
