import { mariaSarmiento } from "../../../../king/fixtures";
import getCharacterCard from "../getCharacterCard.js";

const screen = document.createElement("div");

afterEach(() => {
  screen.innerHTML = "";
});

describe("Given a CharacterCard component", () => {
  describe("When it receives a 'María Sarmiento'", () => {
    const handleGetOverlay = jest
      .fn()
      .mockReturnValue(document.createElement("div"));

    test("Then it should show 'María Sarmiento' inside a heading", () => {
      const expectedCharacterName = "María Sarmiento";

      const CharacterCard = getCharacterCard(mariaSarmiento, handleGetOverlay);
      screen.appendChild(CharacterCard);

      const characterName = screen.querySelector("h2");

      expect(characterName).not.toBeNull();
      expect(characterName?.textContent).toBe(expectedCharacterName);
    });

    test("Then it should show 'Age: 50 years", () => {
      const expectedCharacterAge = "Age: " + 50 + " years";

      const CharacterCard = getCharacterCard(mariaSarmiento, handleGetOverlay);
      screen.appendChild(CharacterCard);

      const characterAge = screen.querySelector("span");

      expect(characterAge).not.toBeNull();
      expect(characterAge?.textContent).toBe(expectedCharacterAge);
    });

    describe("And she is dead", () => {
      test("Then it should show a state with a thumbs down icon", () => {
        const expectedIconDescription = "Thumbs down icon";
        const deadCharacter = { ...mariaSarmiento };
        deadCharacter.isAlive = false;

        const CharacterCard = getCharacterCard(deadCharacter, handleGetOverlay);
        screen.appendChild(CharacterCard);

        const CardIcon = screen.querySelector(
          ".character__state-icon",
        ) as HTMLImageElement;

        expect(CardIcon).not.toBeNull();
        expect(CardIcon?.alt).toBe(expectedIconDescription);
      });

      test("Then it should show the portrait of María Sarmiento upside down", () => {
        const deadCharacter = { ...mariaSarmiento };
        deadCharacter.kill();
        const expectedPortraitDescription =
          "Portrait of María Sarmiento upside down";

        const CharacterCard = getCharacterCard(deadCharacter, handleGetOverlay);
        screen.appendChild(CharacterCard);

        const CardImage = screen.querySelector(".reverse") as HTMLImageElement;
        const actualPortraitDescription = CardImage?.alt;

        expect(CardImage).not.toBeNull();
        expect(actualPortraitDescription).toBe(expectedPortraitDescription);
      });
    });
  });
});
