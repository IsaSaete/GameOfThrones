import { mariaSarmiento } from "../../../../king/fixtures";
import getCharacterCard from "../getCharacterCard.js";

describe("Given a CharacterCard component", () => {
  describe("When it receives a 'María Sarmiento'", () => {
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

    test("Then it should show a state with a thumb down icon when María Sarmiento is dead", () => {
      const screen = document.createElement("div");
      const expectedIconDescription = "thumb down icon";

      const deadCharacter = { ...mariaSarmiento };
      deadCharacter.isAlive = false;

      const CharacterCard = getCharacterCard(deadCharacter);

      screen.appendChild(CharacterCard);

      const CardIcon = screen.querySelector(
        ".character__state-icon",
      ) as HTMLImageElement;

      expect(CardIcon).not.toBeNull();
      expect(CardIcon?.alt).toBe(expectedIconDescription);
    });

    test("Then it should show the portrait of María Sarmiento upside down when her state is dead", () => {
      const deadCharacter = { ... mariaSarmiento};
      const screen = document.createElement("div");
      deadCharacter.isAlive = false;
      const expectedPortraitDescription = "Portrait of María Sarmiento upside down"

      const CharacterCard = getCharacterCard(deadCharacter);

      screen.appendChild(CharacterCard);

      const actualPortraitDescription = deadCharacter.portrait.description

      const CardImage = screen.querySelector(".character__portrait--reverse");

      expect(CardImage).not.toBeNull();
      expect(actualPortraitDescription).toBe(expectedPortraitDescription);
    });
  });
});
